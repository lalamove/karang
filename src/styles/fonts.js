import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url(https://fonts.googleapis.com/css?family=Noto+Sans:400,700);
  @import url(https://fonts.googleapis.com/earlyaccess/notosansjapanese.css);
  @import url(https://fonts.googleapis.com/earlyaccess/notosanstc.css);
`;

export const primaryFonts =
  'Noto Sans, "Noto Sans TC", "Noto Sans JP", sans-serif';

export const fontWeight = {
  normal: 400,
  bold: 700,
};

export default {
  primaryFonts,
  fontWeight,
};
