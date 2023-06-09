import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## br
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br
 *
 * The `<br>` HTML element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.
 */
export interface BrHTMLAttributes extends GlobalHTMLAttributes {
  /**
   * @deprecated
   */
  clear: string;
}
