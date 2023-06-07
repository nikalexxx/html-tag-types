export type TupleToUnion<T extends [...any[]]> = T['length'] extends 0
  ? never
  : T extends [infer X, ...infer Y]
  ? X | TupleToUnion<Y>
  : never;
