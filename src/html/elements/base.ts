import { GlobalHTMLAttributes } from '../global-attributes';
import { StandardTarget } from '../shared-attributes';

/**
 * ## base
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
 *
 * The `<base>` HTML element specifies the base URL to use for all relative URLs in a document. There can be only one `<base>` element in a document.
 */
export interface BaseHTMLAttributes extends GlobalHTMLAttributes {
  href: string;

  target: StandardTarget | '';
}
