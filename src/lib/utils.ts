import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with conflict resolution.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a date string to a human-readable format.
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Truncate text to a given length.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '...';
}

/**
 * Generate a placeholder image URL with customizable text.
 * Uses CSS gradient backgrounds instead of external services.
 */
export function placeholderImage(
  width: number = 800,
  height: number = 600,
  text: string = 'Image'
): string {
  // Returns a data URI for a simple colored placeholder
  // In production, replace with real images
  return `/api/placeholder?w=${width}&h=${height}&text=${encodeURIComponent(text)}`;
}
