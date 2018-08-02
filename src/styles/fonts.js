import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url(https://fonts.googleapis.com/css?family=Noto+Sans:400,700);
  @import url(https://fonts.googleapis.com/earlyaccess/notosansjapanese.css);
  @import url(https://fonts.googleapis.com/earlyaccess/notosanstc.css);
`;

export const primaryFonts =
  'Noto Sans, "Noto Sans TC", "Noto Sans JP", sans-serif';

export const fontSize = {
  micro: '10px',
  small: '12px', // Label Text font size
  regular: '14px', // Body Text font size
  medium: '16px', // Button font size
  large: '18px', // Title font size
  xlarge: '24px', // Popup Title font size
  xxlarge: '36px', // Pin Input small font size
  xxxlarge: '48px', // Pin Input font size
};

export const fontWeight = {
  regular: 400,
  bold: 700,
};

export default {
  primaryFonts,
  fontWeight,
  fontSize,
};
