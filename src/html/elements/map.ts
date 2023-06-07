import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## map
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map
 *
 * The `<map>` HTML element is used with area elements to define an image map (a clickable link area).
 */
export interface MapHTMLAttributes extends GlobalHTMLAttributes {
  name: string;
}
