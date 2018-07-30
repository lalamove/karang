import Button from './Button';

const Link = Button.withComponent('a'); // eslint-disable-line import/no-named-as-default-member
const LinkButton = Link.extend`
  border-radius: 2px;
  margin-top: 20px;
  text-align: center;
`;

export default LinkButton;
