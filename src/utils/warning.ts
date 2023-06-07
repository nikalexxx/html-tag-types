import { TupleToUnion } from './tupleToUnion';

type JoinTuple<T extends [...any[]]> = T['length'] extends 0
  ? ''
  : T extends [infer X extends string, ...infer Y]
  ? `${X}${JoinTuple<Y>}`
  : '';

export type WarningForLiterals<T, V, L extends [...string[]], D extends string = 'only for values'> = [T] extends [
  TupleToUnion<L>,
]
  ? V
  : V & { warning: `${D}: ${JoinTuple<L>}` };
