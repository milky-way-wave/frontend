import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => {
  if (args.length === 0) return undefined;
  return twMerge(clsx(...args));
};
