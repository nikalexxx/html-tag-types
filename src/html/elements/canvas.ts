import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## canvas
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
 *
 * Container element to use with either the canvas scripting API or the WebGL API to draw graphics and animations.
 */
export interface CanvasHTMLAttributes extends GlobalHTMLAttributes {
  height: number;

  width: number;

  /** @deprecated */
  'moz-opaque': string;
}
