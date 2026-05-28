"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { IconType } from "react-icons";

interface FloatingIconsBackgroundProps {
  icons: { icon: IconType; color: string }[];
  count?: number;
  accentColor?: string;
}

interface FloatingIconElement {
  id: number;
  Icon: IconType;
  color: string;
  size: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
  yOffset: number;
  xOffset: number;
  rotation: number;
}

const hexToRgba = (hex: string, alpha: number) => {
  const normalized = hex.replace("#", "");
  const value = normalized.length === 3
    ? normalized.split("").map((char) => char + char).join("")
    : normalized;

  const parsed = Number.parseInt(value, 16);
  if (Number.isNaN(parsed)) return `rgb(154 133 232 / ${alpha})`;

  const red = (parsed >> 16) & 255;
  const green = (parsed >> 8) & 255;
  const blue = parsed & 255;

  return `rgb(${red} ${green} ${blue} / ${alpha})`;
};

export function FloatingIconsBackground({ icons, count = 20, accentColor = "#9a85e8" }: FloatingIconsBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.05, margin: "200px" });
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [elements, setElements] = useState<FloatingIconElement[]>([]);

  useEffect(() => {
    if (icons.length === 0) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const effectiveCount = prefersReducedMotion
      ? Math.min(count, 6)
      : Math.min(count, isMobile ? 8 : 18);

    const generated = Array.from({ length: effectiveCount }).map((_, i) => {
      const iconData = icons[Math.floor(Math.random() * icons.length)];
      return {
        id: i,
        Icon: iconData.icon,
        color: iconData.color,
        size: Math.random() * 22 + 16,
        left: `${Math.random() * 90 + 5}%`,
        top: `${Math.random() * 90 + 5}%`,
        duration: Math.random() * 36 + 34,
        delay: Math.random() * -30,
        yOffset: Math.random() * 150 + 50,
        xOffset: (Math.random() - 0.5) * 100,
        rotation: Math.random() * 360,
      };
    });
    setElements(generated);
    setMounted(true);
  }, [icons, count, prefersReducedMotion]);

  if (!mounted) return null;

  const shouldAnimate = isInView && !prefersReducedMotion;
  const softAccent = hexToRgba(accentColor, 0.055);
  const faintAccent = hexToRgba(accentColor, 0.032);
  const iconGlow = hexToRgba(accentColor, 0.18);
  const sharedViolet = "rgb(154 133 232 / 0.035)";
  const sharedBlue = "rgb(56 189 248 / 0.024)";

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        maskImage: "linear-gradient(to bottom, transparent 0%, black 16%, black 84%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 16%, black 84%, transparent 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: `
            radial-gradient(circle at 18% 24%, ${softAccent} 0, transparent 32%),
            radial-gradient(circle at 78% 38%, ${faintAccent} 0, transparent 36%),
            radial-gradient(circle at 46% 82%, ${sharedViolet} 0, transparent 40%),
            radial-gradient(circle at 88% 86%, ${sharedBlue} 0, transparent 34%)
          `,
          filter: "blur(2px)",
        }}
      />

      <div className="absolute inset-0 opacity-[0.095] dark:opacity-[0.12]">
        {elements.map((el) => (
          <motion.div
            key={el.id}
            className="absolute z-0"
            style={{
              left: el.left,
              top: el.top,
              filter: `drop-shadow(0 0 18px ${iconGlow})`,
              willChange: shouldAnimate ? "transform" : "auto",
            }}
            animate={shouldAnimate
              ? {
                  y: [0, -el.yOffset, 0],
                  x: [0, el.xOffset, 0],
                  rotate: [el.rotation, el.rotation + 180, el.rotation + 360],
                }
              : { y: 0, x: 0, rotate: el.rotation }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              ease: "linear",
              delay: el.delay,
            }}
          >
            <el.Icon style={{ color: el.color, width: el.size, height: el.size }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
