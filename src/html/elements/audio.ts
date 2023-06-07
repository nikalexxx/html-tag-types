import { GlobalHTMLAttributes } from '../global-attributes';
import { SharedHTMLAttributes } from '../shared-attributes';

/**
 * ## audio
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
 *
 * The `<audio>` HTML element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the source element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.
 */
export interface AudioHTMLAttributes extends GlobalHTMLAttributes {
  autoplay: SharedHTMLAttributes['autoplay'];

  controls: SharedHTMLAttributes['controls'];

  /**
   * @experimental
   */
  controlslist: SharedHTMLAttributes['controlslist'];

  crossorigin: SharedHTMLAttributes['crossorigin'];

  /**
   * @experimental
   */
  disableremoteplayback: boolean;

  loop: boolean;

  muted: boolean;

  preload: SharedHTMLAttributes['preload'];

  src: string;
}
