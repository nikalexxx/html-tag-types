import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## textarea
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
 *
 * Represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.
 */
export interface TextareaHTMLAttributes extends Omit<GlobalHTMLAttributes, 'spellcheck'> {
    autocomplete: 'on' | 'off';
    /**
     * @non-standart
     */
    autocorrect: 'on' | 'off';
    autofocus: boolean;
    cols: number;
    disabled: boolean;
    form: string;
    maxlength: number;
    minlength: number;
    name: string;
    placeholder: string;
    readonly: boolean;
    required: boolean;
    rows: number;
    spellcheck: 'true' | 'default' | 'false';
    wrap: 'hard' | 'soft' | 'off';
}
