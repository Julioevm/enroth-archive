import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isChristmasSeason() {
  const now = new Date();
  const month = now.getMonth(); // 0 = Jan, 11 = Dec
  const day = now.getDate();
  return (month === 11) || (month === 0 && day <= 6);
}

