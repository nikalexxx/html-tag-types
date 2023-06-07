import { GlobalHTMLAttributes } from '../global-attributes';
import { SharedHTMLAttributes } from '../shared-attributes';

/**
 * ## thead
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead
 *
 * Defines a set of rows defining the head of the columns of the table.
 */
export interface TheadHTMLAttributes extends GlobalHTMLAttributes {
  /** @deprecated */
  align: 'left' | 'center' | 'right' | 'justify' | 'char';

  /** @deprecated */
  bgcolor: string;

  /** @deprecated */
  char: string;

  /** @deprecated */
  charoff: number;

  /** @deprecated */
  valign: SharedHTMLAttributes['valign'];
}
