"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const codeSymbols = ["<", ">", "/", "{", "}", ";", "()", "[]", "=>", "&&", "||", "!==", "=="];

interface CodeSymbolElement {
  id: number;
  symbol: string;
  left: string;
  top: string;
  opacity: number;
  scale: number;
  rotation: number;
  xOffset: number;
  yOffset: number;
  duration: number;
  delay: number;
}

const violetWash = "rgb(139 92 246 / 0.042)";
const blueWash = "rgb(56 189 248 / 0.026)";
const sharedWash = "rgb(154 133 232 / 0.03)";

export function FloatingCodeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.05, margin: "200px" });
  const prefersReducedMotion = useReducedMotion();
  const [symbols, setSymbols] = useState<CodeSymbolElement[]>([]);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const count = prefersReducedMotion ? 8 : isMobile ? 12 : 24;

    setSymbols(Array.from({ length: count }).map((_, index) => ({
      id: index,
      symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.04 + 0.055,
      scale: Math.random() * 0.65 + 0.45,
      rotation: Math.random() * 360,
      xOffset: (Math.random() - 0.5) * 140,
      yOffset: (Math.random() - 0.5) * 140,
      duration: Math.random() * 18 + 24,
      delay: Math.random() * -20,
    })));
  }, [prefersReducedMotion]);

  const shouldAnimate = isInView && !prefersReducedMotion;

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
            radial-gradient(circle at 18% 26%, ${violetWash} 0, transparent 34%),
            radial-gradient(circle at 82% 72%, ${blueWash} 0, transparent 38%),
            radial-gradient(circle at 48% 88%, ${sharedWash} 0, transparent 42%)
          `,
          filter: "blur(2px)",
        }}
      />
      <div className="absolute inset-0 z-0">
        {symbols.map((item) => (
          <motion.div
            key={item.id}
            className="absolute text-3xl md:text-5xl font-mono font-bold text-primary drop-shadow-lg"
            style={{
              left: item.left,
              top: item.top,
              opacity: item.opacity,
              scale: item.scale,
              filter: "drop-shadow(0 0 18px rgb(139 92 246 / 0.18))",
              willChange: shouldAnimate ? "transform" : "auto",
            }}
            animate={shouldAnimate
              ? {
                  x: [0, item.xOffset, 0],
                  y: [0, item.yOffset, 0],
                  rotate: [item.rotation, item.rotation + 120, item.rotation + 240],
                }
              : { x: 0, y: 0, rotate: item.rotation }}
            transition={{
              duration: item.duration,
              ease: "easeInOut",
              repeat: Infinity,
              delay: item.delay,
            }}
          >
            {item.symbol}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
