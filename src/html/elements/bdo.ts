import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## bdi
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi
 *
 * The `<bdi>` HTML element tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality of the text being inserted.
 */
export interface BdiHTMLAttributes extends GlobalHTMLAttributes {}
