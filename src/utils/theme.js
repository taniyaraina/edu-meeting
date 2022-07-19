import { createGlobalStyle } from 'styled-components';

const mainBrandColor = '#BB5A3B';
const lightShades = '#FEF2F0';

const theme = {
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.
  lightAccent: '#FFFFFF',
  // Use this color as the background for your dark-on-light designs,
  // or the text color of an inverted design.
  lightShades,
  // Another accent color to consider. Not all colors have to be used -
  // sometimes a simple color scheme works best.
  darkAccent: '#000000',
  // Use as the text color for dark-on-light designs,
  // or as the background for inverted designs.
  primaryColor: mainBrandColor,
  secondaryColor: '#lightShades',
  fontSizeSmall: '15px',
  fontSizeMedium: '27px',
  fontSizeLarge: '70px',
  lineHeight: '30px',
  dangerColor: '#f44336',
  primaryFontFamily: "'Poppins', sans-serif",
};

export default theme;

const GlobalStyle = createGlobalStyle`
body {
  font-family: ${theme.primaryFontFamily} !important;
  color: ${theme.darkAccent} !important;
}
.max-height {
  max-height: none !important;
}
.content {
  img {width: 100%;}
}
`;

export { GlobalStyle };
