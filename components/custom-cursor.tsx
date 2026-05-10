"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    // We set cursor styling globally to hide default cursor
    document.body.style.cursor = "none";
    
    const links = document.querySelectorAll("a, button, input, textarea, select, [role='button']");
    
    const onMouseMove = (e: MouseEvent) => {
      // Main cursor ring follows smoothly
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
      });
      
      // Dot follows immediately
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, {
        scale: 2,
        backgroundColor: "hsla(258, 60%, 68%, 0.1)",
        duration: 0.3
      });
      gsap.to(cursorDot, {
        scale: 0.5,
        duration: 0.3
      });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "transparent",
        duration: 0.3
      });
      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.3
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    links.forEach(link => {
      link.addEventListener("mouseenter", onMouseEnter);
      link.addEventListener("mouseleave", onMouseLeave);
      // Reset cursor for children
      (link as HTMLElement).style.cursor = "none";
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      links.forEach(link => {
        link.removeEventListener("mouseenter", onMouseEnter);
        link.removeEventListener("mouseleave", onMouseLeave);
        (link as HTMLElement).style.cursor = "auto";
      });
      document.body.style.cursor = "auto";
    };
  }, []);

  // Use fixed positioning and pointer-events-none so it doesn't block clicks
  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary/50 pointer-events-none z-[9999] -ml-4 -mt-4 hidden md:block mix-blend-difference"
      />
      <div 
        ref={cursorDotRef} 
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[10000] -ml-1 -mt-1 hidden md:block mix-blend-difference"
      />
    </>
  );
}
