import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
import Checkbox from './index';
//
// class Wrapper extends Component {
//   state = {
//     0: { toggle: true }, // eslint-disable-line react/no-unused-state
//     1: { toggle: true, disabled: true }, // eslint-disable-line react/no-unused-state
//   };
//
//   handleToggle = i => {
//     this.setState(state => ({
//       ...state,
//       [i]: { ...!state[i], toggle: !state[i].toggle },
//     }));
//   };
//
//   render() {
//     return Object.entries(this.state).map(([key, cb]) => (
//       <Fragment>
//         <Checkbox
//           checked={cb.toggle}
//           onChange={() => this.handleToggle(key)}
//           name={`demo${key}_checkbox`}
//           label={`demo${key}`}
//           disabled={cb.disabled}
//         />
//         <br />
//         <br />
//       </Fragment>
//     ));
//   }
// }

storiesOf('Checkbox', module).add('Basic', () => (
  <Checkbox label="Checkbox" disabled={boolean('disabled', false)} />
));
