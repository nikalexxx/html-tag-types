import { GlobalHTMLAttributes } from '../global-attributes';
import { LangAttribute } from '../shared-attributes';

/**
 * ## track
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
 *
 * Used as a child of the media elements, audio and video. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks.
 */
export interface TrackHTMLAttributes extends GlobalHTMLAttributes {
  default: boolean;

  kind: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';

  label: string;

  src: string;

  srclang: LangAttribute;
}
