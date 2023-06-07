import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## head
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head
 *
 * The `<head>` HTML element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets.
 */
export interface HeadHTMLAttributes extends GlobalHTMLAttributes {
  /**
   * @deprecated
   */
  profile: string[];
}
