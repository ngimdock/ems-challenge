import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DEFAULT_LIMIT = 5;
export const DEFAULT_OFFSET = 0;

export const LIMIT_KEY = "limit";
export const OFFSET_KEY = "offset";

export function getAvatarPlaceholder(name: string): string {
  if (!name) return "";

  const parts = name.trim().split(/\s+/);

  if (parts.length >= 2) {
    return parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
  }

  return parts[0].slice(0, 2).toUpperCase();
}

export function formatDateEN(dateString: string): string {
  if (!dateString) return "";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
}
