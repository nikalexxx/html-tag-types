import { id } from './id';

export type BoxedNumber = number & {};

export const numberBox = id as <T extends number>(s: T) => BoxedNumber;
