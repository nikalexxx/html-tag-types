import { id } from './id';

export type Digits = '0123456789';
export type LatinLetters = 'abcdefghijklmnopqrstuvwxyz';
export type UpperCaseLatinLetters = Uppercase<LatinLetters>;
export type Punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

export type Split<S extends string> = S extends '' ? never : S extends `${infer X}${infer Y}` ? X | Split<Y> : S;

export type AsciiChar = Split<Digits> | Split<LatinLetters> | Split<UpperCaseLatinLetters> | Split<Punctuation>;

export type BoxedString = string & {};

export const stringBox = id as <T extends string>(s: T) => BoxedString;
