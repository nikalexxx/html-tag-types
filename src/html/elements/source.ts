import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## source
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source
 *
 * Specifies multiple media resources for the picture, the audio element, or the video element. It is a void element, meaning that it has no content and does not have a closing tag. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats.
 */
export interface SourceHTMLAttributes extends GlobalHTMLAttributes {
  type: string;

  src: string;

  srcset: string;

  sizes: string;

  media: string;

  height: number;

  width: number;
}
