import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Icon from 'components/Icon';
import Button, { ButtonWithComponent, CloseButton } from './index';
import { white, primary } from 'styles/colors';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const CustomComponent = ButtonWithComponent('a');

storiesOf('Button', module).add(
  'Basic',
  withInfo({})(() => (
    <div>
      <h4>Types</h4>
      <Container>
        <Button variant="link">Link</Button>
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </Container>
      <h4>Large</h4>
      <Container>
        <Button variant="link" size="large">
          Link
        </Button>
        <Button size="large">Default</Button>
        <Button variant="primary" size="large">
          Primary
        </Button>
        <Button variant="secondary" size="large">
          Secondary
        </Button>
        <Button variant="outline" size="large">
          Outline
        </Button>
      </Container>
      <h4>Extra Large</h4>
      <Container>
        <Button variant="link" size="xlarge">
          Link
        </Button>
        <Button size="xlarge">Default</Button>
        <Button variant="primary" size="xlarge">
          Primary
        </Button>
        <Button variant="secondary" size="xlarge">
          Secondary
        </Button>
        <Button variant="outline" size="xlarge">
          Outline
        </Button>
      </Container>
      <h4>Block</h4>
      <Button block variant="primary">
        block primary
      </Button>
      <br />
      <Button block>block</Button>
      <h4>Loading</h4>
      <Container>
        <Button isLoading>Demo</Button>
        <Button variant="primary" isLoading>
          Demo
        </Button>
        <Button variant="secondary" isLoading>
          Demo
        </Button>
        <Button variant="outline" isLoading>
          Demo
        </Button>
      </Container>
      <h4>Disabled</h4>
      <Container>
        <Button disabled>Disabled</Button>
        <Button disabled variant="outline">
          Disabled
        </Button>
        <Button disabled variant="link">
          Disabled
        </Button>
        <Button disabled variant="primary" size="large" isLoading block>
          Disabled
        </Button>
      </Container>
      <h4>WithComponent</h4>
      <Container>
        <CustomComponent href="#somewhere" variant="primary">
          {'Button with <a href="#somewhere" /> tag'}
        </CustomComponent>
        <CloseButton />
      </Container>
      <h4>With Icon</h4>
      <Container>
        <Button icon={<Icon type="star" />}>With Icon</Button>
        <Button
          icon={<Icon type="starFilled" color={white} />}
          variant="primary"
        >
          With Icon
        </Button>
        <Button
          icon={<Icon type="starFilled" color={white} />}
          variant="secondary"
        >
          With Icon
        </Button>
        <Button
          icon={<Icon type="star" color={primary.main} />}
          variant="outline"
        >
          With Icon
        </Button>
      </Container>
    </div>
  ))
);
