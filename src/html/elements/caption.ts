import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## caption
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
 *
 * Specifies the caption (or title) of a table.
 */
export interface CaptionHTMLAttributes extends GlobalHTMLAttributes {
  /** @deprecated */
  align: 'left' | 'top' | 'right' | 'bottom';
}
