import {
  AbbrHTMLAttributes,
  AddressHTMLAttributes,
  AHTMLAttributes,
  AreaHTMLAttributes,
  ArticleHTMLAttributes,
  AsideHTMLAttributes,
  AudioHTMLAttributes,
  BaseHTMLAttributes,
  BdiHTMLAttributes,
  BdoHTMLAttributes,
  BHTMLAttributes,
  BlockquoteHTMLAttributes,
  BodyHTMLAttributes,
  BrHTMLAttributes,
  ButtonHTMLAttributes,
  CanvasHTMLAttributes,
  CaptionHTMLAttributes,
  CiteHTMLAttributes,
  CodeHTMLAttributes,
  ColgroupHTMLAttributes,
  ColHTMLAttributes,
  DataHTMLAttributes,
  DatalistHTMLAttributes,
  DdHTMLAttributes,
  DelHTMLAttributes,
  DetailsHTMLAttributes,
  DfnHTMLAttributes,
  DialogHTMLAttributes,
  DivHTMLAttributes,
  DlHTMLAttributes,
  DtHTMLAttributes,
  EmbedHTMLAttributes,
  EmHTMLAttributes,
  FieldsetHTMLAttributes,
  FigcaptionHTMLAttributes,
  FigureHTMLAttributes,
  FooterHTMLAttributes,
  FormHTMLAttributes,
  HeaderHTMLAttributes,
  HeadHTMLAttributes,
  HeadingHTMLAttributes,
  HrHTMLAttributes,
  HtmlHTMLAttributes,
  IframeHTMLAttributes,
  IHTMLAttributes,
  ImgHTMLAttributes,
  InputHTMLAttributes,
  InsHTMLAttributes,
  KbdHTMLAttributes,
  LabelHTMLAttributes,
  LegendHTMLAttributes,
  LiHTMLAttributes,
  LinkHTMLAttributes,
  MainHTMLAttributes,
  MapHTMLAttributes,
  MarkHTMLAttributes,
  MenuHTMLAttributes,
  MetaHTMLAttributes,
  MeterHTMLAttributes,
  NavHTMLAttributes,
  NoscriptHTMLAttributes,
  ObjectHTMLAttributes,
  OlHTMLAttributes,
  OptgroupHTMLAttributes,
  OptionHTMLAttributes,
  OutputHTMLAttributes,
  PHTMLAttributes,
  PictureHTMLAttributes,
  PortalHTMLAttributes,
  PreHTMLAttributes,
  ProgressHTMLAttributes,
  QHTMLAttributes,
  RpHTMLAttributes,
  RtHTMLAttributes,
  RubyHTMLAttributes,
  SampHTMLAttributes,
  ScriptHTMLAttributes,
  SectionHTMLAttributes,
  SelectHTMLAttributes,
  SHTMLAttributes,
  SlotHTMLAttributes,
  SmallHTMLAttributes,
  SourceHTMLAttributes,
  SpanHTMLAttributes,
  StrongHTMLAttributes,
  StyleHTMLAttributes,
  SubHTMLAttributes,
  SummaryHTMLAttributes,
  SupHTMLAttributes,
  TableHTMLAttributes,
  TbodyHTMLAttributes,
  TdHTMLAttributes,
  TemplateHTMLAttributes,
  TextareaHTMLAttributes,
  TfootHTMLAttributes,
  TheadHTMLAttributes,
  ThHTMLAttributes,
  TimeHTMLAttributes,
  TitleHTMLAttributes,
  TrackHTMLAttributes,
  TrHTMLAttributes,
  UHTMLAttributes,
  UlHTMLAttributes,
  VarHTMLAttributes,
  VideoHTMLAttributes,
  WbrHTMLAttributes,
} from './elements';

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element
 */
export interface HtmlElementsAttributesMap {
  // Main root
  html: HtmlHTMLAttributes;

  // Document metadata
  base: BaseHTMLAttributes;
  head: HeadHTMLAttributes;
  link: LinkHTMLAttributes;
  meta: MetaHTMLAttributes;
  style: StyleHTMLAttributes;
  title: TitleHTMLAttributes;

  // Sectioning root
  body: BodyHTMLAttributes;

  // Content sectioning
  address: AddressHTMLAttributes;
  article: ArticleHTMLAttributes;
  aside: AsideHTMLAttributes;
  footer: FooterHTMLAttributes;
  header: HeaderHTMLAttributes;
  h1: HeadingHTMLAttributes;
  h2: HeadingHTMLAttributes;
  h3: HeadingHTMLAttributes;
  h4: HeadingHTMLAttributes;
  h5: HeadingHTMLAttributes;
  h6: HeadingHTMLAttributes;
  main: MainHTMLAttributes;
  nav: NavHTMLAttributes;
  section: SectionHTMLAttributes;

  // Text content
  blockquote: BlockquoteHTMLAttributes;
  dd: DdHTMLAttributes;
  div: DivHTMLAttributes;
  dl: DlHTMLAttributes;
  dt: DtHTMLAttributes;
  figcaption: FigcaptionHTMLAttributes;
  figure: FigureHTMLAttributes;
  hr: HrHTMLAttributes;
  li: LiHTMLAttributes;
  menu: MenuHTMLAttributes;
  ol: OlHTMLAttributes;
  p: PHTMLAttributes;
  pre: PreHTMLAttributes;
  ul: UlHTMLAttributes;

  // Inline text semantics
  a: AHTMLAttributes;
  abbr: AbbrHTMLAttributes;
  b: BHTMLAttributes;
  bdi: BdiHTMLAttributes;
  bdo: BdoHTMLAttributes;
  br: BrHTMLAttributes;
  cite: CiteHTMLAttributes;
  code: CodeHTMLAttributes;
  data: DataHTMLAttributes;
  dfn: DfnHTMLAttributes;
  em: EmHTMLAttributes;
  i: IHTMLAttributes;
  kbd: KbdHTMLAttributes;
  mark: MarkHTMLAttributes;
  q: QHTMLAttributes;
  rp: RpHTMLAttributes;
  rt: RtHTMLAttributes;
  ruby: RubyHTMLAttributes;
  s: SHTMLAttributes;
  samp: SampHTMLAttributes;
  small: SmallHTMLAttributes;
  span: SpanHTMLAttributes;
  strong: StrongHTMLAttributes;
  sub: SubHTMLAttributes;
  sup: SupHTMLAttributes;
  time: TimeHTMLAttributes;
  u: UHTMLAttributes;
  var: VarHTMLAttributes;
  wbr: WbrHTMLAttributes;

  // Image and multimedia
  area: AreaHTMLAttributes;
  audio: AudioHTMLAttributes;
  img: ImgHTMLAttributes;
  map: MapHTMLAttributes;
  track: TrackHTMLAttributes;
  video: VideoHTMLAttributes;

  // Embedded content
  embed: EmbedHTMLAttributes;
  iframe: IframeHTMLAttributes;
  object: ObjectHTMLAttributes;
  picture: PictureHTMLAttributes;
  portal: PortalHTMLAttributes;
  source: SourceHTMLAttributes;

  // Scripting
  canvas: CanvasHTMLAttributes;
  noscript: NoscriptHTMLAttributes;
  script: ScriptHTMLAttributes;

  // Demarcating edits
  del: DelHTMLAttributes;
  ins: InsHTMLAttributes;

  // Table content
  caption: CaptionHTMLAttributes;
  col: ColHTMLAttributes;
  colgroup: ColgroupHTMLAttributes;
  table: TableHTMLAttributes;
  tbody: TbodyHTMLAttributes;
  td: TdHTMLAttributes;
  tfoot: TfootHTMLAttributes;
  th: ThHTMLAttributes;
  thead: TheadHTMLAttributes;
  tr: TrHTMLAttributes;

  // Forms
  button: ButtonHTMLAttributes;
  datalist: DatalistHTMLAttributes;
  fieldset: FieldsetHTMLAttributes;
  form: FormHTMLAttributes;
  input: InputHTMLAttributes;
  label: LabelHTMLAttributes;
  legend: LegendHTMLAttributes;
  meter: MeterHTMLAttributes;
  optgroup: OptgroupHTMLAttributes;
  option: OptionHTMLAttributes;
  output: OutputHTMLAttributes;
  progress: ProgressHTMLAttributes;
  select: SelectHTMLAttributes;
  textarea: TextareaHTMLAttributes;

  // Interactive elements
  details: DetailsHTMLAttributes;
  dialog: DialogHTMLAttributes;
  summary: SummaryHTMLAttributes;

  // Web Components
  slot: SlotHTMLAttributes;
  template: TemplateHTMLAttributes;
}
