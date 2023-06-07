import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## ul
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
 *
 * The `<ul>` HTML element represents an unordered list of items, typically rendered as a bulleted list.
 */
export interface UlHTMLAttributes extends GlobalHTMLAttributes {
  /**
   * @deprecated
   */
  compact: boolean;

  /**
   * @deprecated
   */
  type: 'circle' | 'disc' | 'square' | 'triangle';
}
