import { withComponent } from './Button';

const Link = withComponent('a');
const LinkButton = Link.extend`
  border-radius: 2px;
  margin-top: 20px;
  text-align: center;
`;

export default LinkButton;
