import { GlobalHTMLAttributes } from '../global-attributes';
import { SharedHTMLAttributes } from '../shared-attributes';

/**
 * ## img
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
 *
 * The `<img>` HTML element embeds an image into the document.
 */
export interface ImgHTMLAttributes extends GlobalHTMLAttributes {
  alt: string;

  crossorigin: SharedHTMLAttributes['crossorigin'];

  decoding: 'sync' | 'async' | 'auto';

  elementtiming: string;

  /**
   * @experimental
   */
  fetchpriority: SharedHTMLAttributes['fetchpriority'];

  height: number;

  ismap: boolean;

  loading: SharedHTMLAttributes['loading'];

  referrerpolicy: SharedHTMLAttributes['referrerpolicy'];

  sizes: string;

  src: string;

  srcset: string;

  width: number;

  usemap: string;

  /**
   * @deprecated
   */
  align: 'top' | 'middle' | 'bottom' | 'left' | 'right';

  /**
   * @deprecated
   */
  border: string;

  /**
   * @deprecated
   */
  hspace: string;

  /**
   * @deprecated
   */
  longdesc: string;

  /**
   * @deprecated
   */
  name: string;

  /**
   * @deprecated
   */
  vspace: string;
}
