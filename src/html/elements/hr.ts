import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## hr
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr
 *
 * The `<hr>` HTML element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.
 */
export interface HrHTMLAttributes extends GlobalHTMLAttributes {
  /**
   * @deprecated
   */
  align: string;

  /**
   * @deprecated
   */
  color: string;

  /**
   * @deprecated
   */
  noshade: string;

  /**
   * @deprecated
   */
  size: string;

  /**
   * @deprecated
   */
  width: string;
}
