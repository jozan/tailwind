import type { ClassValue } from "clsx"

export function condc<T>(left: T) {
  return function <F extends ClassValue | false = false>(
    right: T,
    branchTrue: ClassValue,
    branchFalse?: F,
  ): ClassValue | F {
    const effectiveBranchFalse: F | false =
      branchFalse === undefined ? (false as F) : branchFalse
    return left === right ? branchTrue : effectiveBranchFalse
  }
}
