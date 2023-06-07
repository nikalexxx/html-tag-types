import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## q
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q
 *
 * The `<q>` HTML element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. This element is intended for short quotations that don't require paragraph breaks; for long quotations use the blockquote element.
 */
export interface QHTMLAttributes extends GlobalHTMLAttributes {
  cite: string;
}
