export interface ITheme {
  mode: string;
  pallete: Pallete;
}

export interface Pallete {
  background: string;
  primary: string;
  secondary: string;
  font: string;
  white: string;
  blue: { [key: string]: string };
  pink: { [key: string]: string };
}
