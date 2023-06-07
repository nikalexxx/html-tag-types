import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## output
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output
 *
 * Container element into which a site or app can inject the results of a calculation or the outcome of a user action.
 */
export interface OutputHTMLAttributes extends GlobalHTMLAttributes {
    for: string[];
    form: string;
    name: string;
}
