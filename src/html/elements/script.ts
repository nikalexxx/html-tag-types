import { GlobalHTMLAttributes } from '../global-attributes';
import { LangAttribute, LegacyJavascriptMIMEType, SharedHTMLAttributes } from '../shared-attributes';

/**
 * ## script
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
 *
 * Used to embed executable code or data; this is typically used to embed or refer to JavaScript code. The `<script>` element can also be used with other languages, such as WebGL's GLSL shader programming language and JSON.
 */
export interface ScriptHTMLAttributes extends GlobalHTMLAttributes {
  async: boolean;

  crossorigin: boolean;

  defer: boolean;

  /**
   * @experimental
   */
  fetchpriority: SharedHTMLAttributes['fetchpriority'];

  integrity: string;

  nomodule: boolean;

  nonce: string;

  referrerpolicy: SharedHTMLAttributes['referrerpolicy'];

  src: string;

  type: '' | LegacyJavascriptMIMEType | 'module' | 'importmap';

  blocking: string[];

  /** @deprecated */
  charset: 'utf-8';

  /** @deprecated */
  language: LangAttribute;
}
