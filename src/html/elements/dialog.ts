import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## dialog
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
 *
 * Represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.
 */
export interface DialogHTMLAttributes extends Omit<GlobalHTMLAttributes, 'tabindex'> {
    open: boolean;
}
