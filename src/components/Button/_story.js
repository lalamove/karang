import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import StarIcon from 'components/Icon/icons/toggle/star';
import StarFilledIcon from 'components/Icon/icons/toggle/starFilled';

import Button, { ButtonWithComponent, CloseButton } from './index';

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
        <Button variant="danger">Danger</Button>
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
        <Button variant="danger" size="large">
          Danger
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
        <Button variant="danger" size="xlarge">
          Danger
        </Button>
        <Button variant="outline" size="xlarge">
          Outline
        </Button>
      </Container>
      <h4>Block</h4>
      <Button block>Default</Button>
      <br />
      <Button block variant="primary">
        Primary
      </Button>
      <br />
      <Button block variant="secondary">
        Secondary
      </Button>
      <br />
      <Button block variant="danger">
        Danger
      </Button>
      <br />
      <Button block variant="outline">
        Outline
      </Button>
      <br />
      <h4>Loading</h4>
      <Container>
        <Button variant="link" isLoading>
          Link
        </Button>
        <Button isLoading>Default</Button>
        <Button variant="primary" isLoading>
          Primary
        </Button>
        <Button variant="secondary" isLoading>
          Secondary
        </Button>
        <Button variant="danger" isLoading>
          Danger
        </Button>
        <Button variant="outline" isLoading>
          Outline
        </Button>
      </Container>
      <h4>Disabled</h4>
      <Container>
        <Button disabled variant="link">
          Link
        </Button>
        <Button disabled>Default</Button>
        <Button disabled variant="primary">
          Primary
        </Button>
        <Button disabled variant="secondary">
          Secondary
        </Button>
        <Button disabled variant="danger">
          Danger
        </Button>
        <Button disabled variant="outline">
          Outline
        </Button>
      </Container>
      <h4>With Icon</h4>
      <Container>
        <Button icon={<StarIcon />} variant="link">
          With Icon
        </Button>
        <Button icon={<StarIcon />}>With Icon</Button>
        <Button icon={<StarFilledIcon />} variant="primary">
          With Icon
        </Button>
        <Button icon={<StarFilledIcon />} variant="secondary">
          With Icon
        </Button>
        <Button icon={<StarIcon />} variant="danger">
          With Icon
        </Button>
        <Button icon={<StarIcon />} variant="outline">
          With Icon
        </Button>
      </Container>
      <h4>WithComponent</h4>
      <Container>
        <CustomComponent href="#somewhere" variant="primary">
          {'Button with <a href="#somewhere" /> tag'}
        </CustomComponent>
        <CloseButton />
      </Container>
    </div>
  ))
);
