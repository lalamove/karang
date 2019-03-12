import dateFns from 'date-fns';
import { injectGlobal } from 'styled-components';
import BaseApp from '../src/components/BaseApp';
import Button from '../src/components/Button';
import Rating from '../src/components/Rating';
import Icon from '../src/components/Icon';
import { fontSize } from 'styles/fonts';

injectGlobal`
  @import url(https://fonts.googleapis.com/css?family=Noto+Sans:400,700);
  html, body {
    font-family: "Noto Sans", sans-serif;
    font-size: ${fontSize.regular};
  }
`;
global.Button = Button;
global.Rating = Rating;
global.dateFns = dateFns;
