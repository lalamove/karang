import styled from 'styled-components';
import { withComponent } from './Button';

const Link = withComponent('a');
const LinkButton = styled(Link)`
  border-radius: 2px;
  margin-top: 20px;
  text-align: center;
`;

export default LinkButton;
