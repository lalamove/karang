import dateFns from 'date-fns';
import BaseApp from '../src/components/BaseApp';
import Button from '../src/components/Button';
import Rating from '../src/components/Rating';
import { fontSize } from 'styles/fonts';

global.Button = Button;
global.Rating = Rating;
global.dateFns = dateFns;
