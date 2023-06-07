import { GlobalHTMLAttributes } from '../global-attributes';
import { SharedHTMLAttributes } from '../shared-attributes';

/**
 * ## tfoot
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot
 *
 * Defines a set of rows summarizing the columns of the table.
 */
export interface TfootHTMLAttributes extends GlobalHTMLAttributes {
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
