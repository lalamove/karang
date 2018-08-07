import { PureComponent } from 'react';
import { func, node, number } from 'prop-types';
import noop from 'utils/noop';

class Label extends PureComponent {
  static propTypes = {
    children: node.isRequired,
    handleListCounts: func,
    count: number,
    depthLevel: number,
  };

  static defaultProps = {
    handleListCounts: noop,
    count: null,
    depthLevel: null,
  };

  componentDidMount() {
    const { count, depthLevel, handleListCounts } = this.props;
    handleListCounts(count, depthLevel);
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default Label;
