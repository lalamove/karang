import React from 'react';
import { storiesOf } from '@storybook/react';
import LmDatePicker from './index';
import moment from 'moment';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 400px;
`;

const DatePickerStory = () => {
  console.log(
    moment()
      .add(3, 'months')
      .toString()
  );
  console.log(
    moment()
      .add(3, 'months')
      .add(10, 'days')
  );
  return (
    <Container>
      <LmDatePicker
        initialStartDate={null}
        initialEndDate={null}
        isOutsideRange={() => false}
      />
    </Container>
  );
};

storiesOf('Date Picker', module).add('DatePicker', () => <DatePickerStory />);
