export interface Sheet {
  version: string;
  encoding: string;
  feed: Feed;
}
export interface Feed {
  xmlns: string;
  xmlns$openSearch: string;
  xmlns$batch: string;
  xmlns$gs: string;
  id: Value;
  updated: Value;
  category?: CategoryEntity[] | null;
  title: TitleOrContent;
  link?: LinkEntity[] | null;
  author?: AuthorEntity[] | null;
  openSearch$totalResults: Value;
  openSearch$startIndex: Value;
  gs$rowCount: Value;
  gs$colCount: Value;
  entry?: EntryEntity[] | null;
}
export interface Value {
  $t: string;
}
export interface CategoryEntity {
  scheme: string;
  term: string;
}
export interface TitleOrContent {
  type: string;
  $t: string;
}
export interface LinkEntity {
  rel: string;
  type: string;
  href: string;
}
export interface AuthorEntity {
  name: Value;
  email: Value;
}
export interface EntryEntity {
  id: Value;
  updated: Value;
  category?: CategoryEntity[] | null;
  title: TitleOrContent;
  content: TitleOrContent;
  link?: LinkEntity[] | null;
  gs$cell: Gs$cell;
}
export interface Gs$cell {
  row: string;
  col: string;
  inputValue: string;
  $t: string;
  numericValue?: string | null;
}
