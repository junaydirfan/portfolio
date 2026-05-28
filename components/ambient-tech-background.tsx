"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AmbientTechBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHoverPrecisely = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const grid = document.createElement("div");
    grid.className = "absolute inset-0 pointer-events-none opacity-[0.04]";
    grid.style.backgroundImage = `
      linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
      linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
    `;
    grid.style.backgroundSize = "64px 64px";
    grid.style.maskImage = "linear-gradient(to bottom, black 20%, transparent 80%)";
    grid.style.webkitMaskImage = "linear-gradient(to bottom, black 20%, transparent 80%)";
    grid.style.willChange = "transform";
    container.appendChild(grid);

    const spotlight = document.createElement("div");
    spotlight.className = "absolute pointer-events-none rounded-full blur-[100px] opacity-20 mix-blend-screen";
    spotlight.style.width = "400px";
    spotlight.style.height = "400px";
    spotlight.style.background = "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)";
    spotlight.style.willChange = "transform";
    gsap.set(spotlight, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      force3D: true,
    });
    container.appendChild(spotlight);

    if (prefersReducedMotion || !canHoverPrecisely) {
      return () => {
        grid.remove();
        spotlight.remove();
      };
    }

    const moveSpotlightX = gsap.quickTo(spotlight, "x", { duration: 0.7, ease: "power3.out" });
    const moveSpotlightY = gsap.quickTo(spotlight, "y", { duration: 0.7, ease: "power3.out" });
    const moveGridX = gsap.quickTo(grid, "x", { duration: 1.2, ease: "power3.out" });
    const moveGridY = gsap.quickTo(grid, "y", { duration: 1.2, ease: "power3.out" });

    const onPointerMove = (e: PointerEvent) => {
      moveSpotlightX(e.clientX);
      moveSpotlightY(e.clientY);
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      moveGridX(-x);
      moveGridY(-y);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      gsap.killTweensOf(grid);
      gsap.killTweensOf(spotlight);
      grid.remove();
      spotlight.remove();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,hsl(var(--background))_100%)] z-[1]"></div>
    </div>
  );
}
