export type Experimental<T> = T & { experimental: true };
export function experimental<T>(value: T): Experimental<T> {
  return value as Experimental<T>;
}
