import { GlobalHTMLAttributes, HTMLDir } from '../global-attributes';

/**
 * ## bdo
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo
 *
 * The `<bdo>` HTML element overrides the current directionality of text, so that the text within is rendered in a different direction.
 */
export interface BdoHTMLAttributes extends GlobalHTMLAttributes {
  dir: Exclude<HTMLDir, 'auto'>;
}
