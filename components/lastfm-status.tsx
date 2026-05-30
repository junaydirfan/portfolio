"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Disc3, AlertCircle } from "lucide-react";
import Image from "next/image";

interface LastFmTrack {
  name: string;
  artist: string;
  album?: string;
  url: string;
  image: string | null;
}

export default function LastFmStatus() {
  const [data, setData] = useState<{ isPlaying: boolean; track: LastFmTrack | null } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchTrack = async (force = false) => {
      if (!force && document.hidden) return;

      try {
        const apiKey = process.env.NEXT_PUBLIC_LASTFM_API_KEY;
        const username = process.env.NEXT_PUBLIC_LASTFM_USERNAME;
        
        if (!apiKey || !username) {
          setError(true);
          setLoading(false);
          return;
        }

        const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1&t=${Date.now()}`, {
          cache: "no-store",
        });
        
        if (res.ok) {
          const data = await res.json();
          const track = data.recenttracks?.track?.[0];
          
          if (!track) {
            setData({ isPlaying: false, track: null });
            setError(false);
            return;
          }

          const isPlaying = track["@attr"]?.nowplaying === "true";
          const song = {
            name: track.name,
            artist: track.artist["#text"],
            album: track.album["#text"],
            url: track.url,
            image: track.image?.[2]?.["#text"] || track.image?.[1]?.["#text"] || null,
          };

          setData({ isPlaying, track: song });
          setError(false);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Failed to fetch Last.fm status", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTrack(true);
    const interval = setInterval(() => fetchTrack(), 120000);
    const handleVisibilityChange = () => {
      if (!document.hidden) void fetchTrack(true);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  if (loading || error || !data?.track) {
    return null; // Don't render anything if it fails or is loading
  }

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col items-end">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 w-12 rounded-full bg-card/80 backdrop-blur-md border border-border flex items-center justify-center shadow-[0_0_15px_hsl(var(--primary)/0.15)] hover:border-primary/50 transition-colors focus-visible:outline-none z-50 relative overflow-hidden group"
      >
        {data.track.image && (
          <div 
            className="absolute inset-0 z-0 opacity-20 blur-md transform scale-150 transition-opacity group-hover:opacity-40"
            style={{ backgroundImage: `url(${data.track.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        )}
        <div className="relative z-10 flex items-center justify-center">
          {data.isPlaying ? (
            <span className="flex items-end gap-[2px] h-4">
              <motion.span animate={{ height: ["4px", "12px", "4px"] }} transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }} className="w-[3px] bg-primary rounded-full"></motion.span>
              <motion.span animate={{ height: ["8px", "4px", "8px"] }} transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay: 0.2 }} className="w-[3px] bg-primary rounded-full"></motion.span>
              <motion.span animate={{ height: ["5px", "14px", "5px"] }} transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut", delay: 0.4 }} className="w-[3px] bg-primary rounded-full"></motion.span>
            </span>
          ) : (
            <Music className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 right-0 w-72 rounded-2xl border border-border bg-card/90 backdrop-blur-xl p-4 shadow-xl overflow-hidden"
          >
            {/* Background Blur */}
            {data.track.image && (
              <div 
                className="absolute inset-0 z-0 opacity-10 blur-2xl transform scale-150"
                style={{ backgroundImage: `url(${data.track.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            )}
            
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex justify-between items-center w-full">
                <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                  {data.isPlaying ? "Now Playing" : "Last Played"}
                </span>
                <Disc3 className={`h-4 w-4 text-primary ${data.isPlaying ? "animate-spin [animation-duration:3s]" : ""}`} />
              </div>

              <a 
                href={data.track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                {data.track.image ? (
                  <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg shadow-md ring-1 ring-border group-hover:ring-primary/50 transition-all">
                    <Image 
                      src={data.track.image} 
                      alt={data.track.album || "Album cover"} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                ) : (
                  <div className="h-14 w-14 flex-shrink-0 rounded-lg bg-muted flex items-center justify-center">
                    <Music className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
                
                <div className="flex flex-col overflow-hidden w-full">
                  <span className="truncate text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {data.track.name}
                  </span>
                  <span className="truncate text-xs text-muted-foreground mt-0.5">
                    {data.track.artist}
                  </span>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
