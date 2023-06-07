import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## ins
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins
 *
 * Represents a range of text that has been added to a document. You can use the `<del>` element to similarly represent a range of text that has been deleted from the document.
 */
export interface InsHTMLAttributes extends GlobalHTMLAttributes {
  cite: string;

  datetime: string;
}
