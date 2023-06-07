import { GlobalHTMLAttributes } from '../global-attributes';
import { SharedHTMLAttributes } from '../shared-attributes';

/**
 * ## tbody
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody
 *
 * Encapsulates a set of table rows (`<tr>` elements), indicating that they comprise the body of the table (`<table>`).
 */
export interface TbodyHTMLAttributes extends GlobalHTMLAttributes {
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
