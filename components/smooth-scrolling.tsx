"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchPrimary = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isTouchPrimary) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.62,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      prevent: (node) => Boolean(node.closest("[data-lenis-prevent], [data-project-dialog-scroll]")),
      virtualScroll: () => document.documentElement.dataset.projectModalOpen !== "true",
    });

    let rafId: number | null = null;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    const startRaf = () => {
      if (rafId == null) {
        rafId = requestAnimationFrame(raf);
      }
    };

    const stopRaf = () => {
      if (rafId != null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    startRaf();

    const resumeIfAllowed = () => {
      if (document.hidden || document.documentElement.dataset.projectModalOpen === "true") {
        lenis.stop();
        stopRaf();
        return;
      }
      lenis.start();
      startRaf();
    };

    const handleProjectModalScrollLock = (event: Event) => {
      const isOpen = event instanceof CustomEvent && Boolean(event.detail?.open);
      if (isOpen) {
        lenis.stop();
        stopRaf();
      } else {
        resumeIfAllowed();
      }
    };

    const handleVisibilityChange = () => {
      resumeIfAllowed();
    };

    window.addEventListener("project-modal-scroll-lock", handleProjectModalScrollLock);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("project-modal-scroll-lock", handleProjectModalScrollLock);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      stopRaf();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
