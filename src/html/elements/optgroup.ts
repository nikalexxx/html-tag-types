import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## optgroup
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup
 *
 * Creates a grouping of options within a `<select>` element.
 */
export interface OptgroupHTMLAttributes extends GlobalHTMLAttributes {
    label: string;
    disabled: boolean;
}
