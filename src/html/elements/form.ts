import { GlobalHTMLAttributes } from '../global-attributes';
import { StandardTarget } from '../shared-attributes';

/**
 * ## form
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
 *
 * Represents a document section containing interactive controls for submitting information.
 */
export interface FormHTMLAttributes extends GlobalHTMLAttributes {
    /** @deprecated */
    accept: string;

    'accept-charset': string[];

    /** @non-standart */
    autocapitalize: 'none' | 'sentences' | 'words' | 'characters';

    autocomplete: 'on' | 'off';

    name: string;

    rel: string[];

    action: string;

    enctype: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';

    method: 'post' | 'get' | 'dialog';

    novalidate: boolean;

    target: StandardTarget;
}
