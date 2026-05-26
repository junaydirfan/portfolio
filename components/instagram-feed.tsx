"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface InstagramPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  sizes?: {
    medium?: {
      mediaUrl: string;
    }
  }
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstagram = async () => {
      try {
        const res = await fetch("https://feeds.behold.so/Iog7BHYnPsWKbKpJwkAX?t=" + Date.now(), {
          cache: "no-store",
        });
        if (res.ok) {
          const data = await res.json();
          // We only need the first 4 posts to fill the 2x2 grid
          setPosts(data.posts?.slice(0, 4) || []);
        }
      } catch (error) {
        console.error("Failed to fetch Instagram feed", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagram();
  }, []);

  return (
    <a 
      href="https://instagram.com/thejaytheory"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 flex flex-col relative overflow-hidden hover:border-primary/50 transition-colors shadow-sm min-h-[300px] group"
    >
      <div className="relative z-10 flex items-center justify-between text-sm font-medium text-muted-foreground mb-4">
        <div className="flex items-center gap-2">
          {/* SVG Instagram Icon */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
          <span>@thejaytheory</span>
        </div>
        <span className="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
          Follow <ChevronRight className="w-3 h-3" />
        </span>
      </div>
      
      <div className="grid grid-cols-2 grid-rows-2 gap-2 flex-1 h-full w-full relative z-10">
        {loading ? (
          // Loading skeletons
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="relative w-full h-full rounded-xl overflow-hidden bg-muted animate-pulse" />
          ))
        ) : posts.length > 0 ? (
          posts.map((post, i) => (
            <div key={post.id} className="relative w-full h-full min-h-[100px] rounded-xl overflow-hidden group-hover:opacity-90 transition-opacity bg-muted">
              <Image 
                src={post.sizes?.medium?.mediaUrl || post.mediaUrl} 
                alt={`Instagram Post ${i + 1}`} 
                fill 
                className={`object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i === 1 ? 'delay-75' : i === 2 ? 'delay-100' : i === 3 ? 'delay-150' : ''
                }`}
                unoptimized // External images
              />
            </div>
          ))
        ) : (
          // Fallback if fetch fails or is empty
          <>
            <div className="relative w-full h-full rounded-xl overflow-hidden group-hover:opacity-90 transition-opacity">
              <Image src="/images/tayyab.webp" alt="Instagram Post 1" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="relative w-full h-full rounded-xl overflow-hidden group-hover:opacity-90 transition-opacity">
              <Image src="/images/campusthrive.webp" alt="Instagram Post 2" fill className="object-cover transition-transform duration-700 group-hover:scale-110 delay-75" />
            </div>
            <div className="relative w-full h-full rounded-xl overflow-hidden group-hover:opacity-90 transition-opacity">
              <Image src="/images/socialsight.webp" alt="Instagram Post 3" fill className="object-cover transition-transform duration-700 group-hover:scale-110 delay-100" />
            </div>
            <div className="relative w-full h-full rounded-xl overflow-hidden group-hover:opacity-90 transition-opacity">
              <Image src="/images/hoorcharms.webp" alt="Instagram Post 4" fill className="object-cover transition-transform duration-700 group-hover:scale-110 delay-150" />
            </div>
          </>
        )}
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-end p-6">
        <p className="text-sm font-semibold text-foreground translate-y-4 group-hover:translate-y-0 transition-transform">Through My Lens</p>
      </div>
    </a>
  );
}
