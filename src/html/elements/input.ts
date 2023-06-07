import { NonStandard, WarningForLiterals } from '../../utils';
import { GlobalHTMLAttributes } from '../global-attributes';
import { AutocompleteAttribute } from '../shared-attributes';
import { FormHTMLAttributes } from './form';

type InputTypeAttribute =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | 'datetime';

type WarningDescription = 'only for input types';
type WarningForInput<T, V, L extends [InputTypeAttribute, ...InputTypeAttribute[]]> = WarningForLiterals<
  T,
  V,
  L,
  WarningDescription
>;
/**
 * ## input
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
 *
 * Used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The `<input>` element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.
 */
export interface InputHTMLAttributes<Type extends InputTypeAttribute = InputTypeAttribute>
  extends GlobalHTMLAttributes {
  type: Type;

  accept: WarningForInput<Type, string, ['file']>;

  alt: WarningForInput<Type, string, ['image']>;

  autocomplete: WarningForInput<
    Type,
    `${AutocompleteAttribute}${' webauth' | ''}`,
    [
      'hidden',
      'text',
      'search',
      'url',
      'tel',
      'email',
      'date',
      'month',
      'week',
      'time',
      'datetime-local',
      'number',
      'range',
      'color',
      'password',
    ]
  >;

  autofocus: boolean;

  capture: WarningForInput<Type, string, ['file']>;

  checked: WarningForInput<Type, boolean, ['radio', 'checkbox']>;

  dirname: WarningForInput<Type, string, ['text', 'search']>;

  disabled: boolean;

  form: string;

  formaction: WarningForInput<Type, string, ['image', 'submit']>;

  formenctype: WarningForInput<Type, FormHTMLAttributes['enctype'], ['image', 'submit']>;

  formmethod: WarningForInput<Type, FormHTMLAttributes['method'], ['image', 'submit']>;

  formnovalidate: WarningForInput<Type, boolean, ['image', 'submit']>;

  formtarget: WarningForInput<Type, FormHTMLAttributes['target'], ['image', 'submit']>;

  height: WarningForInput<Type, number, ['image']>;

  list: WarningForInput<
    Type,
    string,
    [
      'text',
      'search',
      'url',
      'tel',
      'email',
      'date',
      'month',
      'week',
      'time',
      'datetime-local',
      'number',
      'range',
      'color',
    ]
  >;

  max: WarningForInput<Type, number, ['date', 'month', 'week', 'time', 'datetime-local', 'number', 'range']>;

  maxlength: WarningForInput<Type, number, ['text', 'search', 'url', 'tel', 'email', 'password']>;

  min: WarningForInput<Type, number, ['date', 'month', 'week', 'time', 'datetime-local', 'number', 'range']>;

  minlength: WarningForInput<Type, number, ['text', 'search', 'url', 'tel', 'email', 'password']>;

  multiple: WarningForInput<Type, boolean, ['file']>;

  name: string;

  pattern: WarningForInput<Type, string, ['text', 'search', 'url', 'tel', 'email', 'password']>;

  placeholder: WarningForInput<Type, string, ['text', 'search', 'url', 'tel', 'email', 'password']>;

  readonly: WarningForInput<
    Type,
    boolean,
    ['text', 'search', 'url', 'tel', 'email', 'date', 'month', 'week', 'time', 'datetime-local', 'number', 'password']
  >;

  required: WarningForInput<
    Type,
    boolean,
    [
      'text',
      'search',
      'url',
      'tel',
      'email',
      'date',
      'month',
      'week',
      'time',
      'datetime-local',
      'number',
      'password',
      'checkbox',
      'radio',
      'file',
    ]
  >;

  size: WarningForInput<Type, number, ['email', 'password', 'tel', 'url', 'text']>;

  src: WarningForInput<Type, string, ['image']>;

  step: WarningForInput<Type, number, ['date', 'month', 'week', 'time', 'datetime-local', 'number', 'range']>;

  value: string;

  width: WarningForInput<Type, string, ['image']>;

  autocorrect: NonStandard<'on' | 'off'>;

  incremental: NonStandard<boolean>;

  orient: NonStandard<'horizontal' | 'vertical'>;

  results: NonStandard<number>;

  webkitdirectory: NonStandard<boolean>;
}
