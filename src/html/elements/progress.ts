import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## progress
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
 *
 * Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 */
export interface ProgressHTMLAttributes extends GlobalHTMLAttributes {
    max: number;
    value: number;
}
