import { GlobalHTMLAttributes } from '../global-attributes';
import { SharedHTMLAttributes } from '../shared-attributes';

/**
 * ## tr
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr
 *
 * Defines a row of cells in a table. The row's cells can then be established using a mix of `<td>` (data cell) and `<th>` (header cell) elements.
 */
export interface TrHTMLAttributes extends GlobalHTMLAttributes {
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
