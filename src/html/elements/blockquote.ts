import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## blockquote
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
 *
 * The `<blockquote>` HTML element indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the cite element.
 */
export interface BlockquoteHTMLAttributes extends GlobalHTMLAttributes {
    cite: string;
}
