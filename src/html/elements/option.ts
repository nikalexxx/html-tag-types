import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## option
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option
 *
 * Used to define an item contained in a select, an `<optgroup>`, or a `<datalist>` element. As such, `<option>` can represent menu items in popups and other lists of items in an HTML document.
 */
export interface OptionHTMLAttributes extends GlobalHTMLAttributes {
    disabled: boolean;
    label: string;
    selected: boolean;
    value: string;
}
