import { DateTime } from "luxon";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DEFAULT_EMPLOYEES_LIMIT = 5;
export const DEFAULT_TIMESHEETS_LIMIT = 3;
export const DEFAULT_OFFSET = 0;

export const LIMIT_KEY = "limit";
export const OFFSET_KEY = "offset";
export const SEARCH_KEY = "search";

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

export function toDatetimeLocal(value?: string) {
  if (!value) return "";

  return DateTime.fromISO(value).toFormat("yyyy-MM-dd'T'HH:mm");
}

export function toCanadaDateTime(value: string) {
  return DateTime.fromISO(value, { zone: "America/Toronto" }).toFormat(
    "yyyy-MM-dd'T'HH:mm:ssZZ'['z']'",
  );
}

export function toBerlinDateTime(value: string) {
  return DateTime.fromISO(value, { zone: "Europe/Berlin" }).toFormat(
    "yyyy-MM-dd'T'HH:mm:ssZZ'['z']'",
  );
}
