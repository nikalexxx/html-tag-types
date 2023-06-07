import { GlobalHTMLAttributes } from '../global-attributes';
import { LangAttribute, RelAttribute, SharedHTMLAttributes, StandardTarget } from '../shared-attributes';

/**
 * ## area
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area
 *
 * The `<area>` HTML element defines an area inside an image map that has predefined clickable areas. An image map allows geometric areas on an image to be associated with Hyperlink.
 */
export interface AreaHTMLAttributes extends GlobalHTMLAttributes {
  alt: string;
  coords: string;
  download: SharedHTMLAttributes['download'];
  href: string;

  /**
   * @deprecated
   */
  hreflang: LangAttribute;

  ping: SharedHTMLAttributes['ping'];

  referrerpolicy: ReferrerPolicy;

  rel: RelAttribute;

  shape: 'rect' | 'circle' | 'poly' | 'default';

  target: StandardTarget;

  /**
   * @deprecated
   */
  name: string;

  /**
   * @deprecated
   */
  nohref: boolean;

  /**
   * @deprecated
   */
  type: string;
}
