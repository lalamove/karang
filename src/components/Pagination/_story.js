import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import styled from 'styled-components';

import Pagination from './index';
import Input from '../Input';
import BaseApp from '../BaseApp';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > :not(:last-child) {
    padding-bottom: 1rem;
  }
`;

const Wrapper = () => {
  const [total, setTotal] = useState(40);
  const handleChange = e => setTotal(parseInt(e.target.value, 10));

  return (
    <div dir={boolean('Right-to-left', false) ? 'rtl' : 'ltr'}>
      <BaseApp rtl={boolean('Right-to-left', false)}>
        <h4>Basic</h4>
        <Pagination />
        <h4>With custom description</h4>
        <Pagination description="{{fromIndex}}至{{toIndex}}，{{total}}條項目" />
        <h4>With text buttons</h4>
        <Pagination showLabel />
        <h4>With custom text buttons</h4>
        <Pagination prevLabel="Blah" nextLabel="Lala" showLabel />
        <h4>With custom total items</h4>
        <Container>
          <Pagination total={total} />
          <Input
            type="text"
            label="Current total items"
            name="total"
            value={total}
            onChange={handleChange}
            autoFocus
          />
        </Container>
      </BaseApp>
    </div>
  );
};

storiesOf('Pagination', module).add('Basic', () => <Wrapper />);
