import { GlobalHTMLAttributes } from '../global-attributes';
import { SharedHTMLAttributes } from '../shared-attributes';

/**
 * ## col
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col
 *
 * Defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a `<colgroup>` element.
 */
export interface ColHTMLAttributes extends GlobalHTMLAttributes {
  span: number;

  /** @deprecated */
  align: 'left' | 'center' | 'right' | 'justify';

  /** @deprecated */
  bgcolor: string;

  /** @deprecated */
  char: string;

  /** @deprecated */
  charoff: number;

  /** @deprecated */
  valign: SharedHTMLAttributes['valign'];

  /** @deprecated */
  width: string;
}
