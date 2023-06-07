import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## template
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
 *
 * A mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.
 */
export interface TemplateHTMLAttributes extends GlobalHTMLAttributes {
    /**
     * @non-standart
     */
    shadowrootmode: 'open' | 'closed';
}
