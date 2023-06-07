import { GlobalHTMLAttributes } from '../global-attributes';
import { AutocompleteAttribute } from '../shared-attributes';

/**
 * ## select
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
 *
 * Represents a control that provides a menu of options.
 */
export interface SelectHTMLAttributes extends GlobalHTMLAttributes {
    autocomplete: AutocompleteAttribute;
    autofocus: boolean;
    disabled: boolean;
    form: string;
    multiple: boolean;
    name: string;
    required: boolean;
    size: number;
}
