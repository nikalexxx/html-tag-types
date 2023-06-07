import { GlobalHTMLAttributes } from '../global-attributes';
import {
  MIMETypeAttribute,
  RelAttribute,
  SharedHTMLAttributes,
  SizeAtrribute,
  SrcsetAttribute,
} from '../shared-attributes';

/**
 * ## link
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
 *
 * The `<link>` HTML element specifies relationships between the current document and an external resource. This element is most commonly used to link to CSS, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.
 */
export interface LinkHTMLAttributes extends GlobalHTMLAttributes {
  as:
    | 'audio'
    | 'document'
    | 'embed'
    | 'fetch'
    | 'font'
    | 'image'
    | 'object'
    | 'script'
    | 'style'
    | 'track'
    | 'video'
    | 'worker';

  crossorigin: SharedHTMLAttributes['crossorigin'] | '';

  /**
   * @deprecated
   */
  disabled: boolean;

  /**
   * @experimental
   */
  fetchpriority: SharedHTMLAttributes['fetchpriority'];

  href: string;

  hreflang: string;

  imagesizes: SizeAtrribute;

  imagesrcset: SrcsetAttribute;

  integrity: string;

  media: string;

  /**
   * @experimental
   */
  prefetch: string;

  referrerpolicy: Exclude<SharedHTMLAttributes['referrerpolicy'], 'strict-origin' | 'strict-origin-when-cross-origin'>;

  rel: RelAttribute[];

  /**
   * @experimental
   */
  sizes: Array<'any' | `${number}${'x' | 'X'}${number}`>;

  title: string;

  type: MIMETypeAttribute;

  blocking: string[];

  /**
   * @deprecated
   */
  methods: string;

  /**
   * @deprecated
   */
  target: string;

  /**
   * @deprecated
   */
  charset: string;

  /**
   * @deprecated
   */
  rev: string;
}
