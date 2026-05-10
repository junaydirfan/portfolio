"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface FloatingIconsBackgroundProps {
  icons: { icon: IconType; color: string }[];
  count?: number;
}

export function FloatingIconsBackground({ icons, count = 20 }: FloatingIconsBackgroundProps) {
  const [mounted, setMounted] = useState(false);
  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    // Generate random positions, speeds, and sizes
    const generated = Array.from({ length: count }).map((_, i) => {
      const iconData = icons[Math.floor(Math.random() * icons.length)];
      return {
        id: i,
        Icon: iconData.icon,
        color: iconData.color,
        size: Math.random() * 24 + 16, // 16px to 40px
        left: `${Math.random() * 90 + 5}%`, // 5% to 95%
        top: `${Math.random() * 90 + 5}%`, // 5% to 95%
        duration: Math.random() * 30 + 20, // 20s to 50s
        delay: Math.random() * -30, // random start time
        yOffset: Math.random() * 150 + 50,
        xOffset: (Math.random() - 0.5) * 100,
        rotation: Math.random() * 360,
      };
    });
    setElements(generated);
    setMounted(true);
  }, [icons, count]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.07] dark:opacity-10">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute z-0"
          style={{ left: el.left, top: el.top }}
          animate={{
            y: [0, -el.yOffset, 0],
            x: [0, el.xOffset, 0],
            rotate: [el.rotation, el.rotation + 180, el.rotation + 360],
          }}
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
  );
}
