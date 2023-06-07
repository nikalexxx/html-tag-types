import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## html
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html
 *
 * The `<html>` HTML element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.
 */
export interface HtmlHTMLAttributes extends GlobalHTMLAttributes {
  /**
   * @deprecated
   */
  manifest: string;

  /**
   * @deprecated
   */
  version: string;

  /**
   * @default "http://www.w3.org/1999/xhtml"
   */
  xmlns: string;
}
