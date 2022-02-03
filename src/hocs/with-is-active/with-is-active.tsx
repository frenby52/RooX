import * as React from "react";
import {Subtract} from "utility-types";

interface State {
  isActive: boolean;
}

interface InjectingProps {
  isActive: boolean;
  onIsActiveChange: () => void;
}

const withIsActive = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithIsActive extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false
      };

      this._handleIsActiveChange = this._handleIsActiveChange.bind(this);
    }

    _handleIsActiveChange(isActive) {
      this.setState({isActive});
    }

    render() {
      const {isActive} = this.state;

      return <Component
        {...this.props}
        isActive={isActive}
        onIsActiveChange={this._handleIsActiveChange}
      />;
    }

  }

  return WithIsActive;
};

export default withIsActive;
