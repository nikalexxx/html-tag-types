import { BoxedString } from '../../utils';
import { GlobalHTMLAttributes } from '../global-attributes';
import {
  ColorScheme,
  ColorValue,
  NonStandardMetadataName,
  SharedHTMLAttributes,
  StandardMetadataName,
} from '../shared-attributes';

export type MetaContentByName<N extends MetaHTMLAttributes['name']> = [N] extends ['referrer']
  ? Exclude<SharedHTMLAttributes['referrerpolicy'], 'unsafe-url'> | 'unsafe-URL'
  : [N] extends ['theme-color']
  ? ColorValue
  : [N] extends ['color-scheme']
  ? ColorScheme[]
  : string;

type MetaNameAttribute = StandardMetadataName | 'viewport' | NonStandardMetadataName | BoxedString;
/**
 * ## meta
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
 *
 * The `<meta>` HTML element represents Metadata that cannot be represented by other HTML meta-related elements, like base, link, script, style or title.
 */
export interface MetaHTMLAttributes<Name extends MetaNameAttribute = MetaNameAttribute> extends GlobalHTMLAttributes {
  charset: 'utf-8' | BoxedString;

  content: MetaContentByName<Name>;

  'http-equiv': 'content-security-policy' | 'content-type' | 'default-style' | 'refresh' | BoxedString;

  name: Name;
}
