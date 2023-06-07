import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## dd
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd
 *
 * The `<dd>` HTML element provides the description, definition, or value for the preceding term (dt) in a description list (dl).
 */
export interface DdHTMLAttributes extends GlobalHTMLAttributes {
  /**
   * @deprecated
   */
  nowrap: 'yes' | 'no';
}
