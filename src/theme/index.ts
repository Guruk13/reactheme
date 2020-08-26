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
};

export default styled;
export { css, createGlobalStyle, keyframes, ThemeProvider };