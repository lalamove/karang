import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import AlertIcon from 'components/Icon/icons/alert/alert';
import CloseIcon from 'components/Icon/icons/content/close';
import StarIcon from 'components/Icon/icons/toggle/star';
import StarFilledIcon from 'components/Icon/icons/toggle/starFilled';

import Button, { ButtonWithComponent, IconButton, CloseButton } from './index';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const CustomComponent = ButtonWithComponent('a');

storiesOf('Button', module)
  .add('Solid', () => (
    <div>
      <h4>Small</h4>
      <Container>
        <Button variant="link" size="small" solid>
          Link
        </Button>
        <Button size="small" solid>
          Default
        </Button>
        <Button variant="primary" size="small" solid>
          Primary
        </Button>
        <Button variant="secondary" size="small" solid>
          Secondary
        </Button>
        <Button variant="danger" size="small" solid>
          Danger
        </Button>
      </Container>
      <h4>Default</h4>
      <Container>
        <Button variant="link" solid>
          Link
        </Button>
        <Button solid>Default</Button>
        <Button variant="primary" solid>
          Primary
        </Button>
        <Button variant="secondary" solid>
          Secondary
        </Button>
        <Button variant="danger" solid>
          Danger
        </Button>
      </Container>
      <h4>Large</h4>
      <Container>
        <Button variant="link" size="large" solid>
          Link
        </Button>
        <Button size="large" solid>
          Default
        </Button>
        <Button variant="primary" size="large" solid>
          Primary
        </Button>
        <Button variant="secondary" size="large" solid>
          Secondary
        </Button>
        <Button variant="danger" size="large" solid>
          Danger
        </Button>
      </Container>
      <h4>Extra Large</h4>
      <Container>
        <Button variant="link" size="xlarge" solid>
          Link
        </Button>
        <Button size="xlarge" solid>
          Default
        </Button>
        <Button variant="primary" size="xlarge" solid>
          Primary
        </Button>
        <Button variant="secondary" size="xlarge" solid>
          Secondary
        </Button>
        <Button variant="danger" size="xlarge" solid>
          Danger
        </Button>
      </Container>
      <h4>Block</h4>
      <Button block variant="link" solid>
        Link
      </Button>
      <br />
      <Button block solid>
        Default
      </Button>
      <br />
      <Button block variant="primary" solid>
        Primary
      </Button>
      <br />
      <Button block variant="secondary" solid>
        Secondary
      </Button>
      <br />
      <Button block variant="danger" solid>
        Danger
      </Button>
      <br />
      <h4>Loading</h4>
      <Container>
        <Button variant="link" isLoading solid>
          Link
        </Button>
        <Button isLoading solid>
          Default
        </Button>
        <Button variant="primary" isLoading solid>
          Primary
        </Button>
        <Button variant="secondary" isLoading solid>
          Secondary
        </Button>
        <Button variant="danger" isLoading solid>
          Danger
        </Button>
      </Container>
      <h4>Disabled</h4>
      <Container>
        <Button disabled variant="link" solid>
          Link
        </Button>
        <Button disabled solid>
          Default
        </Button>
        <Button disabled variant="primary" solid>
          Primary
        </Button>
        <Button disabled variant="secondary" solid>
          Secondary
        </Button>
        <Button disabled variant="danger" solid>
          Danger
        </Button>
      </Container>
      <h4>With Icon</h4>
      <Container>
        <Button icon={<StarIcon />} variant="link" solid>
          With Icon
        </Button>
        <Button icon={<StarIcon />} solid>
          With Icon
        </Button>
        <Button icon={<StarFilledIcon />} variant="primary" solid>
          With Icon
        </Button>
        <Button icon={<StarFilledIcon />} variant="secondary" solid>
          With Icon
        </Button>
        <Button icon={<StarIcon />} variant="danger" solid>
          With Icon
        </Button>
      </Container>
      <h4>With Icon before the label</h4>
      <Container>
        <Button icon={<StarIcon />} iconPosition="before" variant="link" solid>
          With Icon
        </Button>
        <Button icon={<StarIcon />} iconPosition="before" solid>
          With Icon
        </Button>
        <Button
          icon={<StarFilledIcon />}
          iconPosition="before"
          variant="primary"
          solid
        >
          With Icon
        </Button>
        <Button
          icon={<StarFilledIcon />}
          iconPosition="before"
          variant="secondary"
          solid
        >
          With Icon
        </Button>
        <Button
          icon={<StarIcon />}
          iconPosition="before"
          variant="danger"
          solid
        >
          With Icon
        </Button>
      </Container>
      <h4>With Icon and loading</h4>
      <Container>
        <Button icon={<StarIcon />} variant="link" isLoading solid>
          With Icon
        </Button>
        <Button icon={<StarIcon />} isLoading solid>
          With Icon
        </Button>
        <Button icon={<StarFilledIcon />} variant="primary" isLoading solid>
          With Icon
        </Button>
        <Button icon={<StarFilledIcon />} variant="secondary" isLoading solid>
          With Icon
        </Button>
        <Button icon={<StarIcon />} variant="danger" isLoading solid>
          With Icon
        </Button>
      </Container>
      <h4>WithComponent</h4>
      <Container>
        <CustomComponent href="#somewhere" variant="primary" solid>
          {'Button with <a href="#somewhere" /> tag'}
        </CustomComponent>
      </Container>
    </div>
  ))
  .add('Subtle', () => (
    <div>
      <h4>Small</h4>
      <Container>
        <Button variant="link" size="small">
          Link
        </Button>
        <Button size="small">Default</Button>
        <Button variant="primary" size="small">
          Primary
        </Button>
        <Button variant="secondary" size="small">
          Secondary
        </Button>
        <Button variant="danger" size="small">
          Danger
        </Button>
      </Container>
      <h4>Default</h4>
      <Container>
        <Button variant="link">Link</Button>
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
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
      </Container>
      <h4>Block</h4>
      <Button block variant="link">
        Link
      </Button>
      <br />
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
      </Container>
      <h4>With Icon and loading</h4>
      <Container>
        <Button icon={<StarIcon />} variant="link" isLoading>
          With Icon
        </Button>
        <Button icon={<StarIcon />} isLoading>
          With Icon
        </Button>
        <Button icon={<StarFilledIcon />} variant="primary" isLoading>
          With Icon
        </Button>
        <Button icon={<StarFilledIcon />} variant="secondary" isLoading>
          With Icon
        </Button>
        <Button icon={<StarIcon />} variant="danger" isLoading>
          With Icon
        </Button>
      </Container>
      <h4>With Icon before the label</h4>
      <Container>
        <Button icon={<StarIcon />} iconPosition="before" variant="link" solid>
          With Icon
        </Button>
        <Button icon={<StarIcon />} iconPosition="before" solid>
          With Icon
        </Button>
        <Button
          icon={<StarFilledIcon />}
          iconPosition="before"
          variant="primary"
          solid
        >
          With Icon
        </Button>
        <Button
          icon={<StarFilledIcon />}
          iconPosition="before"
          variant="secondary"
          solid
        >
          With Icon
        </Button>
        <Button
          icon={<StarIcon />}
          iconPosition="before"
          variant="danger"
          solid
        >
          With Icon
        </Button>
      </Container>
      <h4>WithComponent</h4>
      <Container>
        <CustomComponent href="#somewhere" variant="primary">
          {'Button with <a href="#somewhere" /> tag'}
        </CustomComponent>
      </Container>
    </div>
  ))
  .add('IconButton', () => (
    <div>
      <h4>Round (Default)</h4>
      <Container>
        <IconButton>
          <AlertIcon size={24} />
        </IconButton>
        <IconButton variant="primary">
          <AlertIcon size={24} />
        </IconButton>
        <IconButton variant="secondary">
          <AlertIcon size={24} />
        </IconButton>
        <IconButton variant="danger">
          <AlertIcon size={24} />
        </IconButton>
      </Container>
      <h4>Square</h4>
      <Container>
        <IconButton shape="square">
          <CloseIcon size={24} />
        </IconButton>
        <IconButton shape="square" variant="primary">
          <CloseIcon size={24} />
        </IconButton>
        <IconButton shape="square" variant="secondary">
          <CloseIcon size={24} />
        </IconButton>
        <IconButton shape="square" variant="danger">
          <CloseIcon size={24} />
        </IconButton>
      </Container>
      <h4>Deprecated: CloseButton</h4>
      <CloseButton />
    </div>
  ));
