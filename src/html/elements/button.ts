import { GlobalHTMLAttributes } from '../global-attributes';
import { StandardTarget } from '../shared-attributes';

/**
 * ## button
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 *
 * An interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs an action, such as submitting a form or opening a dialog.
 */
export interface ButtonHTMLAttributes extends GlobalHTMLAttributes {
  autofocus: boolean;

  /** @non-standart */
  autocomplete: string;

  disabled: boolean;

  form: string;

  formaction: string;

  formenctype: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';

  formmethod: 'post' | 'get';

  formnovalidate: boolean;

  formtarget: StandardTarget;

  name: string;

  type: 'submit' | 'reset' | 'button';

  value: string;
}
