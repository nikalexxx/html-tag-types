import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## data
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data
 *
 * The `<data>` HTML element links a given piece of content with a machine-readable translation. If the content is time- or date-related, the time element must be used.
 */
export interface DataHTMLAttributes extends GlobalHTMLAttributes {
    value: string;
}
