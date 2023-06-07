import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## abbr
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr
 *
 * The `<abbr>` HTML element represents an abbreviation or acronym.
 */
export interface AbbrHTMLAttributes extends GlobalHTMLAttributes {
  title: string;
}
