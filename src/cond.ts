import type { ClassValue } from "clsx"

export function cond<V extends ClassValue>(
  predicate: (() => boolean) | boolean,
  value: V,
): V | false {
  const result = typeof predicate === "function" ? predicate() : predicate
  return result ? value : false
}
