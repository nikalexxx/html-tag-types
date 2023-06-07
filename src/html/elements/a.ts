import { GlobalHTMLAttributes } from '../global-attributes';
import {
  KnownReferrerPolicy,
  LangAttribute,
  MIMETypeAttribute,
  RelAttribute,
  SharedHTMLAttributes,
  StandardTarget,
} from '../shared-attributes';

/**
 * ## a
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 *
 * The `<a>` HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.
 */
export interface AHTMLAttributes extends GlobalHTMLAttributes {
  download: string | boolean;
  href: string;
  hreflang: LangAttribute;
  ping: SharedHTMLAttributes['ping'];
  referrerpolicy: KnownReferrerPolicy;
  rel: RelAttribute[];
  target: StandardTarget;
  type: MIMETypeAttribute;

  /**
   * @deprecated
   */
  charset: string;

  /**
   * @deprecated
   */
  coords: string;

  /**
   * @deprecated
   */
  name: string;

  /**
   * @deprecated
   */
  rev: string;

  /**
   * @deprecated
   */
  shape: string;
}
