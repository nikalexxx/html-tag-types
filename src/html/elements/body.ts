import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## body
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body
 *
 * The `<body>` HTML element represents the content of an HTML document. There can be only one `<body>` element in a document.
 */
export interface BodyHTMLAttributes extends GlobalHTMLAttributes {
  /**
   * @deprecated
   */
  alink: string;

  /**
   * @deprecated
   */
  background: string;

  /**
   * @deprecated
   */
  bgcolor: string;

  /**
   * @deprecated
   */
  bottommargin: string;

  /**
   * @deprecated
   */
  leftmargin: string;

  /**
   * @deprecated
   */
  link: string;

  onafterprint: string;

  onbeforeprint: string;

  onbeforeunload: string;

  onblur: string;

  onerror: string;

  onfocus: string;

  onhashchange: string;

  onlanguagechange: string;

  onload: string;

  onmessage: string;

  onoffline: string;

  ononline: string;

  onpopstate: string;

  onredo: string;

  onresize: string;

  onstorage: string;

  onundo: string;

  onunload: string;

  /**
   * @deprecated
   */
  rightmargin: string;

  /**
   * @deprecated
   */
  text: string;

  /**
   * @deprecated
   */
  topmargin: string;

  /**
   * @deprecated
   */
  vlink: string;
}
