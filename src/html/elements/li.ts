import { GlobalHTMLAttributes } from '../global-attributes';
import { OrderedListType } from '../shared-attributes';

/**
 * ## li
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
 *
 * The `<li>` HTML element is used to represent an item in a list. It must be contained in a parent element: an ordered list (ol), an unordered list (ul), or a menu (menu). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.
 */
export interface LiHTMLAttributes extends GlobalHTMLAttributes {
  value: number;

  /**
   * @deprecated
   */
  type: OrderedListType;
}
