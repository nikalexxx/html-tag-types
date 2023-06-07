import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## table
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
 *
 * Represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.
 */
export interface TableHTMLAttributes extends GlobalHTMLAttributes {
  /** @deprecated */
  align: 'left' | 'center' | 'right';

  /** @deprecated */
  bgcolor: string;

  /** @deprecated */
  border: number;

  /** @deprecated */
  cellpadding: string;

  /** @deprecated */
  cellspacing: string;

  /** @deprecated */
  frame: string;

  /** @deprecated */
  rules: 'none' | 'groups' | 'rows' | 'cols' | 'all';

  /** @deprecated */
  summary: string;

  /** @deprecated */
  width: string;
}
