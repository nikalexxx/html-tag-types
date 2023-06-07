import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## dfn
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn
 *
 * The `<dfn>` HTML element is used to indicate the term being defined within the context of a definition phrase or sentence. The ancestor p element, the dt/dd pairing, or the nearest section ancestor of the <dfn> element, is considered to be the definition of the term.
 */
export interface DfnHTMLAttributes extends GlobalHTMLAttributes {
  title: string;
}
