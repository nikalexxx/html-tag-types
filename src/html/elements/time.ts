import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## time
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
 *
 * The `<time>` HTML element represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders.
 */
export interface TimeHTMLAttributes extends GlobalHTMLAttributes {
  datetime: string;
}
