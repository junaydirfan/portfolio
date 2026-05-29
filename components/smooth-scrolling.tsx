"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchPrimary = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isTouchPrimary) {
      return;
    }

    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.85,
      prevent: (node) => Boolean(node.closest("[data-lenis-prevent], [data-project-dialog-scroll]")),
      virtualScroll: () => document.documentElement.dataset.projectModalOpen !== "true",
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);

    gsap.ticker.lagSmoothing(0);

    const handleProjectModalScrollLock = (event: Event) => {
      const isOpen = event instanceof CustomEvent && Boolean(event.detail?.open);
      if (isOpen) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    window.addEventListener("project-modal-scroll-lock", handleProjectModalScrollLock);

    return () => {
      window.removeEventListener("project-modal-scroll-lock", handleProjectModalScrollLock);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
