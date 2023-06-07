import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## details
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
 *
 * Creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the `<summary>` element.
 */
export interface DetailsHTMLAttributes extends GlobalHTMLAttributes {
    open: boolean;
}
