export type Themes = {
  isLightTheme: boolean;
  light: Theme;
  dark: Theme;
};

export type Theme = {
  syntax: string;
  ui: string;
  bg: string;
};
