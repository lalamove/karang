import Button from './Button';

const Link = Button.withComponent('a');
const LinkButton = Link.extend`
  border-radius: 2px;
  margin-top: 20px;
  text-align: center;
`;

export default LinkButton;
