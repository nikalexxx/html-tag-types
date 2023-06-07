import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## style
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style
 *
 * The `<style>` HTML element contains style information for a document, or part of a document. It contains CSS, which is applied to the contents of the document containing the `<style>` element.
 */
export interface StyleHTMLAttributes extends GlobalHTMLAttributes {
  media: string;

  nonce: string;

  title: string;

  blocking: string[];

  /**
   * @deprecated
   */
  type: string;
}
