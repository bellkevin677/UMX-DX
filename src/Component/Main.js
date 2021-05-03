import React from 'react';
import { withRouter } from 'react-router';

class Main extends React.Component {
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
      Cerner
    } = this.props;

    return <div className="App-Main">
      {Cerner ? (
          <h1>Authorized</h1>
        ) : (
          <h1>Please select account type to Log-In</h1>
        )}
    </div>
  }
}

const MainWithRouter = withRouter(Main);

export default MainWithRouter