import { GlobalHTMLAttributes } from '../global-attributes';
import { MIMETypeAttribute } from '../shared-attributes';

/**
 * ## object
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object
 *
 * Represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.
 */
export interface ObjectHTMLAttributes extends GlobalHTMLAttributes {
  /** @deprecated */
  archive: string[];

  /** @deprecated */
  border: number;

  /** @deprecated */
  classid: string;

  /** @deprecated */
  codebase: string;

  /** @deprecated */
  codetype: string;

  data: string;

  /** @deprecated */
  declare: boolean;

  form: string;

  height: number;

  name: string;

  /** @deprecated */
  standby: string;

  type: MIMETypeAttribute;

  usemap: string;

  width: number;
}
