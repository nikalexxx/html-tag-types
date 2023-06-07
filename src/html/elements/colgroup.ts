import { GlobalHTMLAttributes } from '../global-attributes';
import { SharedHTMLAttributes } from '../shared-attributes';

/**
 * ## colgroup
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup
 *
 * Defines a group of columns within a table.
 */
export interface ColgroupHTMLAttributes extends GlobalHTMLAttributes {
  span: number;

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
