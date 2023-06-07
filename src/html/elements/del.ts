import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## del
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del
 *
 * Represents a range of text that has been deleted from a document. This can be used when rendering "track changes" or source code diff information, for example. The `<ins>` element can be used for the opposite purpose: to indicate text that has been added to the document.
 */
export interface DelHTMLAttributes extends GlobalHTMLAttributes {
  cite: string;

  datetime: string;
}
