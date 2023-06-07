import { BoxedString, NonStandard } from '../utils';

export interface SharedHTMLAttributes {
  accept: string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin
   */
  crossorigin: 'anonymous' | 'use-credentials';

  referrerpolicy:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url';

  download: string | boolean;

  ping: string[];

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide
   */
  autoplay: boolean;

  controls: boolean;

  /**
   * https://wicg.github.io/controls-list/explainer.html
   */
  controlslist: ('nodownload' | 'nofullscreen' | 'noremoteplayback' | BoxedString)[];

  preload: 'none' | 'metadata' | 'auto' | '';

  fetchpriority: 'high' | 'low' | 'auto';

  loading: 'eager' | 'lazy';

  valign: 'baseline' | 'bottom' | 'middle' | 'top';
}

export type KnownReferrerPolicy =
  | 'no-referrer'
  | 'no-referrer-when-downgrade'
  | 'origin'
  | 'origin-when-cross-origin'
  | 'same-origin'
  | 'strict-origin'
  | 'strict-origin-when-cross-origin'
  | 'unsafe-url';

/**
 * https://html.spec.whatwg.org/multipage/images.html#sizes-attribute
 */
export type SizeAtrribute = string;

/**
 * RFC: https://www.rfc-editor.org/info/rfc5646
 */
export type LangAttribute = string;

/**
 * https://html.spec.whatwg.org/multipage/images.html#srcset-attribute
 */
export type SrcsetAttribute = string;

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel
 */
export type RelAttribute =
  | 'alternate'
  | 'author'
  | 'bookmark'
  | 'canonical'
  | 'dns-prefetch'
  | 'external'
  | 'help'
  | 'icon'
  | 'license'
  | 'manifest'
  | 'me'
  | 'modulepreload'
  | 'next'
  | 'nofollow'
  | 'noopener'
  | 'noreferrer'
  | 'opener'
  | 'pingback'
  | 'preconnect'
  | 'prefetch'
  | 'preload'
  | 'prerender'
  | 'prev'
  | 'search'
  | 'stylesheet'
  | 'tag'
  | NonStandard<'apple-touch-icon'>
  | BoxedString;

/**
 * https://mimesniff.spec.whatwg.org/#valid-mime-type
 */
export type MIMETypeAttribute = string;

export type LegacyJavascriptMIMEType =
  | 'application/javascript' // Deprecated
  | 'application/ecmascript' // Deprecated
  | 'application/x-ecmascript' // Non-standard
  | 'application/x-javascript' // Non-standard
  | 'text/ecmascript' // Deprecated
  | 'text/javascript1.0' // Non-standard
  | 'text/javascript1.1' // Non-standard
  | 'text/javascript1.2' // Non-standard
  | 'text/javascript1.3' // Non-standard
  | 'text/javascript1.4' // Non-standard
  | 'text/javascript1.5' // Non-standard
  | 'text/jscript' // Non-standard
  | 'text/livescript' // Non-standard
  | 'text/x-ecmascript' // Non-standard
  | 'text/x-javascript';

/**
 * https://html.spec.whatwg.org/multipage/semantics.html#standard-metadata-names
 */
export type StandardMetadataName =
  | 'application-name'
  | 'author'
  | 'description'
  | 'generator'
  | 'keywords'
  | 'referrer'
  | 'theme-color'
  | 'color-scheme';

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#other_metadata_names
 *
 * https://wiki.whatwg.org/wiki/MetaExtensions
 */
export type NonStandardMetadataName = 'creator' | 'publisher' | 'robots';

/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
 */
export type ColorValue = string;

/**
 * https://html.spec.whatwg.org/multipage/semantics.html#meta-color-scheme
 */
export type ColorScheme = 'normal' | 'light' | 'dark' | 'only' | BoxedString;

export type OrderedListType = 'a' | 'A' | 'i' | 'I' | '1';

export type StandardTarget = '_self' | '_blank' | '_parent' | '_top';

export type StandardAutocomplete =
  | 'name'
  | 'honorific-prefix'
  | 'given-name'
  | 'additional-name'
  | 'family-name'
  | 'honorific-suffix'
  | 'nickname'
  | 'username'
  | 'new-password'
  | 'current-password'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'street-address'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'address-level4'
  | 'address-level3'
  | 'address-level2'
  | 'address-level1'
  | 'country'
  | 'country-name'
  | 'postal-code'
  | 'cc-name'
  | 'cc-given-name'
  | 'cc-additional-name'
  | 'cc-family-name'
  | 'cc-number'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-csc'
  | 'cc-type'
  | 'transaction-currency'
  | 'transaction-amount'
  | 'language'
  | 'bday'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'sex'
  | 'url'
  | 'photo';

export type AutocompleteAttribute = `${`section-${string} ` | ''}${'shipping ' | 'billing ' | ''}${
  | StandardAutocomplete
  | `${'home ' | 'work ' | 'mobile ' | 'fax ' | 'pager ' | ''}${
      | 'tel'
      | 'tel-country-code'
      | 'tel-national'
      | 'tel-area-code'
      | 'tel-local'
      | 'tel-local-prefix'
      | 'tel-local-suffix'
      | 'tel-extension'
      | 'email'
      | 'impp'}`}`;
