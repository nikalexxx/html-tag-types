/**
 * All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
 *
 * merge with
 *
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
 *  */
export interface AriaAttributes {
  // Widget attributes

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete
   *
   * The aria-autocomplete attribute indicates whether inputting text could trigger display of one or more predictions of the user's intended value for a combobox, searchbox, or textbox and specifies how predictions will be presented if they are made.
   */
  'aria-autocomplete': 'none' | 'inline' | 'list' | 'both';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked
   *
   * The aria-checked attribute indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   */
  'aria-checked': `${boolean}` | 'mixed' | 'undefined';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled
   *
   * The aria-disabled state indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   */
  'aria-disabled': `${boolean}`;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage
   *
   * The aria-errormessage attribute on an object identifies the element that provides an error message for that object.
   */
  'aria-errormessage': string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded
   *
   * The aria-expanded attribute is set on an element to indicate if a control is expanded or collapsed, and whether or not the controlled elements are displayed or hidden.
   */
  'aria-expanded': `${boolean}` | 'undefined';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup
   *
   * The aria-haspopup attribute indicates the availability and type of interactive popup element that can be triggered by the element on which the attribute is set.
   */
  'aria-haspopup': 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden
   *
   * The aria-hidden state indicates whether the element is exposed to an accessibility API.
   */
  'aria-hidden': `${boolean}` | 'undefined';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid
   *
   * The aria-invalid state indicates the entered value does not conform to the format expected by the application.
   */
  'aria-invalid': 'false' | 'true' | 'grammar' | 'spelling';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label
   *
   * The aria-label attribute defines a string value that labels an interactive element.
   */
  'aria-label': string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level
   *
   * The aria-level attribute defines the hierarchical level of an element within a structure.
   */
  'aria-level': number;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal
   *
   * The aria-modal attribute indicates whether an element is modal when displayed.
   */
  'aria-modal': `${boolean}`;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiline
   *
   * The aria-multiline attribute indicates whether a textbox accepts multiple lines of input or only a single line.
   */
  'aria-multiline': `${boolean}`;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable
   *
   * The aria-multiselectable attribute indicates that the user may select more than one item from the current selectable descendants.
   */
  'aria-multiselectable': `${boolean}`;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation
   *
   * The aria-orientation attribute indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
   */
  'aria-orientation': 'horizontal' | 'vertical' | 'undefined';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder
   *
   * The aria-placeholder attribute defines a short hint (a word or short phrase) intended to help the user with data entry when a form control has no value. The hint can be a sample value or a brief description of the expected format.
   */
  'aria-placeholder': string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed
   *
   * The aria-pressed attribute indicates the current "pressed" state of a toggle button.
   */
  'aria-pressed': 'false' | 'mixed' | 'true' | 'undefined';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly
   *
   * The aria-readonly attribute indicates that the element is not editable, but is otherwise operable.
   */
  'aria-readonly': 'false' | 'true';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required
   *
   * The aria-required attribute indicates that user input is required on the element before a form may be submitted.
   */
  'aria-required': 'false' | 'true';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected
   *
   * The aria-selected attribute indicates the current "selected" state of various widgets.
   */
  'aria-selected': 'false' | 'true' | 'undefined';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort
   *
   * The aria-sort attribute indicates if items in a table or grid are sorted in ascending or descending order.
   */
  'aria-sort': 'none' | 'ascending' | 'descending' | 'other';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax
   *
   * The aria-valuemax attribute defines the maximum allowed value for a range widget.
   */
  'aria-valuemax': number;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin
   *
   * The aria-valuemin attribute defines the minimum allowed value for a range widget.
   */
  'aria-valuemin': number;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow
   *
   * The aria-valuenow attribute defines the current value for a range widget.
   */
  'aria-valuenow': number;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext
   *
   * The aria-valuetext attribute defines the human-readable text alternative of aria-valuenow for a range widget.
   */
  'aria-valuetext': string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy
   *
   * Used in ARIA live regions, the global aria-busy state indicates an element is being modified and that assistive technologies may want to wait until the changes are complete before informing the user about the update.
   */
  'aria-busy': 'false' | 'true';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live
   *
   * The global aria-live attribute indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
   */
  'aria-live': 'off' | 'assertive' | 'polite';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant
   *
   * Used in ARIA live regions, the global aria-relevant attribute indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   */
  'aria-relevant': Array<'additions' | 'removals' | 'text'> | 'all';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic
   *
   * In ARIA live regions, the global aria-atomic attribute indicates whether assistive technologies such as a screen reader will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
   */
  'aria-atomic': 'false' | 'true';

  /**
   * @deprecated
   *
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect
   *
   * The global aria-dropeffect attribute indicates what functions may be performed when a dragged object is released on the drop target.
   */
  'aria-dropeffect': 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup';

  /**
   * @deprecated
   *
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed
   *
   * The aria-grabbed state indicates an element's "grabbed" state in a drag-and-drop operation.
   */
  'aria-grabbed': 'false' | 'true' | 'undefined';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant
   *
   * The aria-activedescendant attribute identifies the currently active element when focus is on a `composite` widget, `combobox`, `textbox`, `group`, or `application`.
   */
  'aria-activedescendant': string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount
   *
   * The aria-colcount attribute defines the total number of columns in a `table`, `grid`, or `treegrid` when not all columns are present in the DOM.
   */
  'aria-colcount': number;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex
   *
   * The aria-colindex attribute defines an element's column index or position with respect to the total number of columns within a `table`, `grid`, or `treegrid`.
   */
  'aria-colindex': number;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colspan
   *
   * The aria-colspan attribute defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   */
  'aria-colspan': number;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls
   *
   * The global aria-controls property identifies the element (or elements) whose contents or presence are controlled by the element on which this attribute is set.
   */
  'aria-controls': string[];

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby
   *
   * The global aria-describedby attribute identifies the element (or elements) that describes the element on which the attribute is set.
   */
  'aria-describedby': string[];

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description
   *
   * The global aria-description attribute defines a string value that describes or annotates the current element.
   */
  'aria-description': string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details
   *
   * The global aria-details attribute identifies the element (or elements) that provide additional information related to the object.
   */
  'aria-details': string[];

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-flowto
   *
   * The global aria-flowto attribute identifies the next element (or elements) in an alternate reading order of content. This allows assistive technology to override the general default of reading in document source order at the user's discretion.
   */
  'aria-flowto': string | string[];

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby
   *
   * The aria-labelledby attribute identifies the element (or elements) that labels the element it is applied to.
   */
  'aria-labelledby': string[];

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns
   *
   * The aria-owns attribute identifies an element (or elements) in order to define a visual, functional, or contextual relationship between a parent and its child elements when the DOM hierarchy cannot be used to represent the relationship.
   */
  'aria-owns': string[];

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset
   *
   * The aria-posinset attribute defines an element's number or position in the current set of listitems or treeitems when not all items are present in the DOM.
   */
  'aria-posinset': number;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount
   *
   * The aria-rowcount attribute defines the total number of rows in a table, grid, or treegrid.
   */
  'aria-rowcount': number;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex
   *
   * The aria-rowindex attribute defines an element's position with respect to the total number of rows within a table, grid, or treegrid.
   */
  'aria-rowindex': number;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan
   *
   * The aria-rowspan attribute defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   */
  'aria-rowspan': number;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize
   *
   * The aria-setsize attribute defines the number of items in the current set of listitems or treeitems when not all items in the set are present in the DOM.
   */
  'aria-setsize': number;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel
   *
   * The global aria-braillelabel property defines a string value that labels the current element, which is intended to be converted into Braille.
   */
  'aria-braillelabel': string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription
   *
   * The global aria-brailleroledescription attribute defines a human-readable, author-localized abbreviated description for the role of an element intended to be converted into Braille.
   */
  'aria-brailleroledescription': string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current
   *
   * A non-null aria-current state on an element indicates that this element represents the current item within a container or set of related elements.
   */
  'aria-current': 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription
   *
   * The aria-roledescription attribute defines a human-readable, author-localized description for the role of an element.
   */
  'aria-roledescription': string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindextext
   *
   * The aria-rowindextext attribute defines a human-readable text alternative of aria-rowindex.
   */
  'aria-rowindextext': string;

  /**
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts
   *
   * The global aria-keyshortcuts attribute indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
   */
  'aria-keyshortcuts': string[];

  role:
    | 'associationlist'
    | 'associationlistitemkey'
    | 'associationlistitemvalue'
    | 'blockquote'
    | 'caption'
    | 'code'
    | 'deletion'
    | 'emphasis'
    | 'insertion'
    | 'paragraph'
    | 'strong'
    | 'subscript'
    | 'superscript'
    | 'time'
    | 'alert'
    | 'alertdialog'
    | 'application'
    | 'article'
    | 'banner'
    | 'button'
    | 'cell'
    | 'checkbox'
    | 'columnheader'
    | 'combobox'
    | 'complementary'
    | 'contentinfo'
    | 'definition'
    | 'dialog'
    | 'directory'
    | 'document'
    | 'feed'
    | 'figure'
    | 'form'
    | 'grid'
    | 'gridcell'
    | 'group'
    | 'heading'
    | 'img'
    | 'link'
    | 'list'
    | 'listbox'
    | 'listitem'
    | 'log'
    | 'main'
    | 'marquee'
    | 'math'
    | 'menu'
    | 'menubar'
    | 'menuitem'
    | 'menuitemcheckbox'
    | 'menuitemradio'
    | 'meter'
    | 'navigation'
    | 'none'
    | 'note'
    | 'option'
    | 'presentation'
    | 'progressbar'
    | 'radio'
    | 'radiogroup'
    | 'region'
    | 'row'
    | 'rowgroup'
    | 'rowheader'
    | 'scrollbar'
    | 'search'
    | 'searchbox'
    | 'separator'
    | 'slider'
    | 'spinbutton'
    | 'status'
    | 'switch'
    | 'tab'
    | 'table'
    | 'tablist'
    | 'tabpanel'
    | 'term'
    | 'textbox'
    | 'timer'
    | 'toolbar'
    | 'tooltip'
    | 'tree'
    | 'treegrid'
    | 'treeitem';
}
