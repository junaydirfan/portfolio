import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateMousePosition(
  event: React.MouseEvent<HTMLElement>,
  element: HTMLElement
) {
  const rect = element.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  
  return {
    x: (event.clientX - centerX) / (rect.width / 2),
    y: (event.clientY - centerY) / (rect.height / 2),
  }
}

export function getSpringConfig(stiffness = 150, damping = 15) {
  return {
    stiffness,
    damping,
    mass: 1,
    restSpeed: 0.001,
  }
}

export function getTransformStyle(x: number, y: number, scale = 1) {
  return {
    transform: `perspective(1000px) rotateX(${y * 10}deg) rotateY(${x * 10}deg) scale(${scale})`,
    transition: "transform 0.1s ease-out",
  }
}
