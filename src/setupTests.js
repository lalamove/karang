import { configure, shallow, render, mount } from 'enzyme';
// forwardRef: Enzyme Internal Error: unknown node with tag 14
// Change back to official package when the fix released
// https://github.com/airbnb/enzyme/pull/1592
// https://github.com/airbnb/enzyme/issues/1604
import Adapter from '@monastic.panic/enzyme-adapter-react-16';
import 'jest-enzyme';
import 'jest-styled-components';

configure({ adapter: new Adapter() });
global.shallow = shallow;
global.render = render;
global.mount = mount;
