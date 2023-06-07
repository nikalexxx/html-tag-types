import { GlobalHTMLAttributes } from '../global-attributes';
import { SharedHTMLAttributes } from '../shared-attributes';

/**
 * ## th
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th
 *
 * Defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.
 */
export interface ThHTMLAttributes extends GlobalHTMLAttributes {
  abbr: string;

  colspan: number;

  headers: string[];

  rowspan: number;

  scope: 'row' | 'col' | 'rowgroup' | 'colgroup';

  /** @deprecated */
  align: 'left' | 'center' | 'right' | 'justify' | 'char';

  /** @deprecated */
  axis: string[];

  /** @deprecated */
  bgcolor: string;

  /** @deprecated */
  char: string;

  /** @deprecated */
  charoff: number;

  /** @deprecated */
  height: string;

  /** @deprecated */
  valign: SharedHTMLAttributes['valign'];

  /** @deprecated */
  width: string;
}
