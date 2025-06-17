export type CustomElement =
  | "body1"
  | "body2"
  | "subtitle1"
  | "subtitle2"
  | "overline";
export type HtmlElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "caption";

export interface TypographyProps {
  variant: CustomElement | HtmlElement;
  component?: keyof HTMLElementTagNameMap;
  class?: string;
  underline?: boolean;
}
