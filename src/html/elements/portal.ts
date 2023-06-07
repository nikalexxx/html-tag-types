import { GlobalHTMLAttributes } from '../global-attributes';
import { SharedHTMLAttributes } from '../shared-attributes';

/**
 * ## portal
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/portal
 *
 * Enables the embedding of another HTML page into the current one for the purposes of allowing smoother navigation into new pages.
 */
export interface PortalHTMLAttributes extends GlobalHTMLAttributes {
  referrerpolicy: SharedHTMLAttributes['referrerpolicy'];

  src: string;
}
