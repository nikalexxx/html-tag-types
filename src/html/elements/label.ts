import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## label
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
 *
 * Represents a caption for an item in a user interface.
 */
export interface LabelHTMLAttributes extends GlobalHTMLAttributes {
    for: string;
}
