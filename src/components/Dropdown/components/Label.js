import { PureComponent } from 'react';
import { bool, func, node, number } from 'prop-types';
import noop from 'utils/noop';

class Label extends PureComponent {
  static propTypes = {
    children: node.isRequired,
    onFocus: bool,
    handleListCounts: func,
    count: number,
    depthLevel: number,
  };

  static defaultProps = {
    handleListCounts: noop,
    onFocus: false,
    count: 0,
    depthLevel: 0,
  };

  componentDidUpdate(prevProps) {
    const { count, depthLevel, onFocus, handleListCounts } = this.props;
    if (prevProps.onFocus !== onFocus) {
      handleListCounts(count, depthLevel);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default Label;
