"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHoverPrecisely = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (prefersReducedMotion || !canHoverPrecisely) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    gsap.set([cursor, cursorDot], {
      xPercent: -50,
      yPercent: -50,
      force3D: true,
    });

    const moveCursorX = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3.out" });
    const moveCursorY = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3.out" });
    const moveDotX = gsap.quickTo(cursorDot, "x", { duration: 0.08, ease: "power2.out" });
    const moveDotY = gsap.quickTo(cursorDot, "y", { duration: 0.08, ease: "power2.out" });

    document.body.style.cursor = "none";

    const onPointerMove = (e: PointerEvent) => {
      moveCursorX(e.clientX);
      moveCursorY(e.clientY);
      moveDotX(e.clientX);
      moveDotY(e.clientY);
    };

    const onPointerOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const interactive = target?.closest("a, button, input, textarea, select, [role='button']");
      const relatedTarget = event.relatedTarget as Element | null;
      if (!interactive || interactive.contains(relatedTarget)) return;
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

    const onPointerOut = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const interactive = target?.closest("a, button, input, textarea, select, [role='button']");
      const relatedTarget = event.relatedTarget as Element | null;
      if (!interactive || interactive.contains(relatedTarget)) return;
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

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.addEventListener("pointerout", onPointerOut, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      gsap.killTweensOf([cursor, cursorDot]);
      document.body.style.cursor = "auto";
    };
  }, []);

  // Use fixed positioning and pointer-events-none so it doesn't block clicks
  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary/50 pointer-events-none z-[9999] hidden md:block mix-blend-difference will-change-transform"
      />
      <div 
        ref={cursorDotRef} 
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[10000] hidden md:block mix-blend-difference will-change-transform"
      />
    </>
  );
}
