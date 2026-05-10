"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AmbientTechBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Sleek grid
    const grid = document.createElement("div");
    grid.className = "absolute inset-0 pointer-events-none opacity-[0.04]";
    grid.style.backgroundImage = `
      linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
      linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
    `;
    grid.style.backgroundSize = "64px 64px";
    grid.style.maskImage = "linear-gradient(to bottom, black 20%, transparent 80%)";
    grid.style.webkitMaskImage = "linear-gradient(to bottom, black 20%, transparent 80%)";
    container.appendChild(grid);

    // Spotlight effect
    const spotlight = document.createElement("div");
    spotlight.className = "absolute pointer-events-none rounded-full blur-[100px] opacity-20 mix-blend-screen";
    spotlight.style.width = "400px";
    spotlight.style.height = "400px";
    spotlight.style.background = "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)";
    // Center initially
    gsap.set(spotlight, { xPercent: -50, yPercent: -50, top: "50%", left: "50%" });
    container.appendChild(spotlight);

    const onMouseMove = (e: MouseEvent) => {
      // Move spotlight
      gsap.to(spotlight, {
        top: e.clientY,
        left: e.clientX,
        duration: 0.8,
        ease: "power2.out",
      });

      // Subtle grid parallax
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      gsap.to(grid, {
        x: -x,
        y: -y,
        duration: 1.5,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
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
