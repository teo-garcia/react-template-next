type ReactChildren = React.ReactNode;

/* Theming */
type Theme = {
  typographyWeights: "regular" | "bold";
  colors: "background" | "text" | "primary" | "secondary";
};

/* Components */
export type LayoutProps = {
  children: ReactChildren;
};

export type GlobalProps = {
  children: ReactChildren;
};

export type TypographyProps = React.HTMLAttributes<HTMLOrSVGElement> & {
  children: ReactChildren;
  tagName?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  weight?: Theme["typographyWeights"];
  color?: Theme["colors"];
};

export type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement>;
