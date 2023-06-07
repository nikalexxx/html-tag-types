import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## div
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div
 *
 * The `<div>` HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. styling is directly applied to it, or some kind of layout model like Flexbox is applied to its parent element).
 */
export interface DivHTMLAttributes extends GlobalHTMLAttributes {
  /**
   * @deprecated
   */
  align: string;
}
