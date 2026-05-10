"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const codeSymbols = ["<", ">", "/", "{", "}", ";", "()", "[]", "=>", "&&", "||", "!==", "=="];

export function FloatingCodeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // We get all the children div elements
    const elements = containerRef.current.children;

    const ctx = gsap.context(() => {
      // Set initial random states
      gsap.set(elements, {
        x: () => Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
        y: () => Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
        opacity: () => Math.random() * 0.05 + 0.05, // 0.05 to 0.1 opacity
        scale: () => Math.random() * 0.8 + 0.4, // 0.4 to 1.2 scale
        rotation: () => Math.random() * 360,
      });

      // Animate them randomly drifting around
      gsap.to(elements, {
        x: "+=random(-150, 150)",
        y: "+=random(-150, 150)",
        rotation: "+=random(-180, 180)",
        duration: "random(15, 30)",
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: {
          amount: 10,
          from: "random"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div ref={containerRef} className="absolute inset-0 z-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl md:text-5xl font-mono font-bold text-primary drop-shadow-lg"
          >
            {codeSymbols[Math.floor(Math.random() * codeSymbols.length)]}
          </div>
        ))}
      </div>
    </div>
  );
}
