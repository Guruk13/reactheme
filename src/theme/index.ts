import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  primaryColor: string;
}

export const theme = {
  primaryColor: "#090966",
  secondaryColor:"",
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  
};


export const starPratina = {
  body: '#709cbf',
  text: '#15151D',
  toggleBorder: '#FFF',
  background: '#6C428E',
}
export const hyerophantoGreen = {
  body: '#E5FFCD',
  text: '#FFFF49',
  toggleBorder: '#6B8096',
  background: '#1D9356',
}

export default styled;
export { css, createGlobalStyle, keyframes, ThemeProvider };
