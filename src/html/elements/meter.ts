import { GlobalHTMLAttributes } from '../global-attributes';

/**
 * ## meter
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter
 *
 * Represents either a scalar value within a known range or a fractional value.
 */
export interface MeterHTMLAttributes extends GlobalHTMLAttributes {
    value: number;
    min: number;
    max: number;
    low: number;
    high: number;
    optimum: number;
}
