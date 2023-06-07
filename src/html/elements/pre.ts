import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## pre
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre
 *
 * The `<pre>` HTML element represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional, or monospaced, font. Whitespace inside this element is displayed as written.
 */
export interface PreHTMLAttributes extends GlobalHTMLAttributes {
  /**
   * @deprecated
   */
  cols: string;

  /**
   * @deprecated
   */
  width: string;

  /**
   * @deprecated
   */
  wrap: string;
}
