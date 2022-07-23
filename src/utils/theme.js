import { createGlobalStyle } from 'styled-components';

const mainBrandColor = '#a12c2f';
const lightShades = '#f5a425';

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
  secondaryColor: lightShades,
  fontSizeSmall: '13px',
  fontSize: '14px',
  fontSizeMedium: '18px',
  fontSizeLarge: '36px',
  lineHeight: '25px',
  dangerColor: '#f44336',
  primaryFontFamily: "'Poppins', sans-serif",
};

export default theme;

const GlobalStyle = createGlobalStyle`
body {
  font-family: ${theme.primaryFontFamily} !important;
  color: white;
  background: url("/images/background-image.jpg") !important;
  background-attachment: fixed !important;
  background-position: center center !important;
  background-size: cover !important;
}
.card,.input,textarea {border-radius: 20px !important;}
.line {
    border-bottom: 1px solid rgba(250, 250, 250, 0.15);
    border-top: 1px solid rgba(250, 250, 250, 0.15);
  }
  input,textarea {
    border: none !important;
    box-shadow: none !important;
    background-color: #f7f7f7 !important;
    font-size: ${theme.fontSizeSmall} !important;
    color: #7a7a7a;
  }
`;

export { GlobalStyle };
