import React from 'react';

const withIsActive = (Component) => {
  class WithIsActive extends React.PureComponent {
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
