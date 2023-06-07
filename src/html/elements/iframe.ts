import { GlobalHTMLAttributes } from '../global-attributes';
import { SharedHTMLAttributes } from '../shared-attributes';

/**
 * ## iframe
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
 *
 * Represents a nested browsing context, embedding another HTML page into the current one.
 */
export interface IframeHTMLAttributes extends GlobalHTMLAttributes {
  allow: string;

  allowfullscreen: boolean;

  /**
   * @experimental
   */
  allowpaymentrequest: boolean;

  /**
   * @experimental
   */
  credentialless: boolean;

  /**
   * @experimental
   */
  csp: string;

  /**
   * @experimental
   */
  fetchpriority: SharedHTMLAttributes['fetchpriority'];

  height: number;

  /**
   * @experimental
   */
  loading: SharedHTMLAttributes['loading'];

  name: string;

  referrerpolicy: SharedHTMLAttributes['referrerpolicy'];

  sandbox:
    | 'allow-downloads-without-user-activation'
    | 'allow-downloads'
    | 'allow-forms'
    | 'allow-modals'
    | 'allow-orientation-lock'
    | 'allow-pointer-lock'
    | 'allow-popups'
    | 'allow-popups-to-escape-sandbox'
    | 'allow-presentation'
    | 'allow-same-origin'
    | 'allow-scripts'
    | 'allow-storage-access-by-user-activation'
    | 'allow-top-navigation'
    | 'allow-top-navigation-by-user-activation';

  src: string;

  srcdoc: string;

  width: number;

  /**
   * @deprecated
   */
  align: string;

  /**
   * @deprecated
   */
  frameborder: number;

  /**
   * @deprecated
   */
  longdesc: string;

  /**
   * @deprecated
   */
  marginheight: number;

  /**
   * @deprecated
   */
  marginwidth: number;

  /**
   * @deprecated
   */
  scrolling: 'auto' | 'yes' | 'no';
}
