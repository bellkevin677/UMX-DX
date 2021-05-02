import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.setMainState = this.setMainState.bind(this);
  }

  setMainState(event) {
    this.setState(event);
  }

  render() {
    const {
        LoggedIn,
        Authorized
    } = this.props;

    return <div className="App-Main">
      {LoggedIn ? (
          Authorized ? (
              <h1>Authorized</h1>
          ) : (
              <h1>Unauthorized</h1>
          )
      ) : (
          <h1>Please select account type to Log-In</h1>
      )}
    </div>
  }
}