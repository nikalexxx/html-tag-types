import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## fieldset
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
 *
 * Used to group several controls as well as labels (`<label>`) within a web form.
 */
export interface FieldsetHTMLAttributes extends GlobalHTMLAttributes {
    disabled: boolean;

    form: string;

    name: string;
}
