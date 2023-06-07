export type NonStandard<T> = T & { 'non-standard': true };
export function nonStandard<T>(value: T): NonStandard<T> {
  return value as NonStandard<T>;
}
