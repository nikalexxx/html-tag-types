import { AriaAttributes } from '../aria';
import { AsciiChar, BoxedNumber, BoxedString, Experimental } from '../utils';
import { LangAttribute } from './shared-attributes';

export type HTMLAutocapitalize = 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';

export type HTMLDir = 'ltr' | 'rtl' | 'auto';

/**
 * https://developer.mozilla.org/docs/Web/HTML/Global_attributes
 */
export interface GlobalHTMLAttributes extends AriaAttributes {
  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey
   */
  accesskey: AsciiChar[] | BoxedString;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize
   */
  autocapitalize: HTMLAutocapitalize;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus
   */
  autofocus: boolean;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class
   */
  class: string[];

  /**
   * https://developer.mozilla.org/ru/docs/Web/HTML/Global_attributes/contenteditable
   */
  contenteditable:
    | `${boolean}`
    | ''
    | Experimental<'caret'>
    | Experimental<'events'>
    | Experimental<'plaintext-only'>
    | Experimental<'typing'>;

  /**
   * @deprecated Deprecated, Non-standard
   *
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contextmenu
   */
  contextmenu: string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*
   */
  [k: `data-${string}`]: string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir
   */
  dir: HTMLDir;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable
   */
  draggable: `${boolean}`;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint
   */
  enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts
   */
  exportparts: string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden
   */
  hidden: boolean | '' | 'hidden' | Experimental<'until-found'>;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id
   */
  id: string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert
   */
  inert: boolean;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode
   */
  inputmode: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/is
   */
  is: string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemid
   */
  itemid: string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemprop
   */
  itemprop: string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemref
   */
  itemref: string[];

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemscope
   */
  itemscope: boolean;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemtype
   */
  itemtype: string[];

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang
   */
  lang: LangAttribute;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce
   */
  nonce: string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part
   */
  part: string[];

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot
   */
  slot: string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck
   */
  spellcheck: `${boolean}` | '';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style
   */
  style: string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   */
  tabindex: 0 | -1 | BoxedNumber;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title
   */
  title: string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate
   */
  translate: 'yes' | 'no' | '';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy
   */
  virtualkeyboardpolicy: 'auto' | 'manual' | '';
}
