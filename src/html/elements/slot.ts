import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## slot
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot
 *
 * Part of the Web Components technology suite, this element is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.
 */
export interface SlotHTMLAttributes extends GlobalHTMLAttributes {
    name: string;
}
