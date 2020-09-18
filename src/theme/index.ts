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
  navColor: string,
  lightColorText: string,
  primaryColor: string;
  secondaryColor: string;
  body: string;
  text: string;
  toggleBorder: string;
  background: string;
}



export const whiteSnake: IThemeInterface = {
  navColor: "red" ,
  lightColorText: "red",
  body: '#709cbf',
  primaryColor: "#090966",
  secondaryColor:"",
  text: '#15151D',
  toggleBorder: '#FFF',
  background: '#6C428E',
}
export const fooFighters: IThemeInterface = {
  navColor: "#212121",
  lightColorText: "#f2f2f2",
  primaryColor: "#212121",
  secondaryColor:"",
  body: '#E5FFCD',
  text: '#FFFF49',
  toggleBorder: '#6B8096',
  background: '#f2f2f2',
}

export default styled;
export { css, createGlobalStyle, keyframes, ThemeProvider };
