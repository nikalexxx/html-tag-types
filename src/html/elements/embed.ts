import { GlobalHTMLAttributes } from '../global-attributes';
import { MIMETypeAttribute } from '../shared-attributes';

/**
 * ## embed
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed
 *
 * Embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in.
 */
export interface EmbedHTMLAttributes extends GlobalHTMLAttributes {
  height: number;

  src: string;

  type: MIMETypeAttribute;

  width: number;
}
