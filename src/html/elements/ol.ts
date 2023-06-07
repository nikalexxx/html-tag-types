import { GlobalHTMLAttributes } from '../global-attributes';
import { OrderedListType } from '../shared-attributes';

/**
 * ## ol
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
 *
 * The <ol> HTML element represents an ordered list of items — typically rendered as a numbered list.
 */
export interface OlHTMLAttributes extends GlobalHTMLAttributes {
    reversed: boolean;

    start: number;

    type: OrderedListType;
}
