import { GlobalHTMLAttributes } from '../global-attributes';
import { SharedHTMLAttributes } from '../shared-attributes';

/**
 * ## td
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td
 *
 * Defines a cell of a table that contains data. It participates in the table model.
 */
export interface TdHTMLAttributes extends GlobalHTMLAttributes {
  colspan: number;

  headers: string[];

  rowspan: number;

  /** @deprecated */
  abbr: string;

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
  scope: string;

  /** @deprecated */
  valign: SharedHTMLAttributes['valign'];

  /** @deprecated */
  width: string;
}
