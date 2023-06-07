import { GlobalHTMLAttributes } from '../global-attributes';
import { SharedHTMLAttributes } from '../shared-attributes';

/**
 * ## video
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
 *
 * Embeds a media player which supports video playback into the document. You can use `<video>` for audio content as well, but the audio element may provide a more appropriate user experience.
 */
export interface VideoHTMLAttributes extends GlobalHTMLAttributes {
  autoplay: SharedHTMLAttributes['autoplay'];

  /**
   * @experimental
   */
  autopictureinpicture: boolean;

  controls: SharedHTMLAttributes['controls'];

  /**
   * @experimental
   */
  controlslist: SharedHTMLAttributes['controlslist'];

  crossorigin: SharedHTMLAttributes['crossorigin'];

  /**
   * @experimental
   */
  disablepictureinpicture: boolean;

  /**
   * @experimental
   */
  disableremoteplayback: boolean;

  height: number;

  loop: boolean;

  muted: boolean;

  playsinline: boolean;

  poster: string;

  preload: SharedHTMLAttributes['preload'];

  src: string;

  width: number;
}
