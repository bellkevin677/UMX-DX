import React from 'react';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false,
      Display: "Observation",
      Data: null
    }
    this.setMainState = this.setMainState.bind(this);
  }

  setMainState(event) {
    this.setState(event);
  }

  render() {
    const {
      Cerner
    } = this.props, {
      Loading,
      Display,
      Data
    } = this.state;

    if (Data) {
      console.log("Display:", Display);
      console.log("Data:", Data);
    }

    return Cerner ? (
      Loading ? (
        <div className="App-Main">
          <h1>Please wait...</h1>
        </div>
      ) : (
        <div className="App-Main">
          <ul className="Main-Nav">
            <li className="Main-Nav-Link">Observation</li>
          </ul>
          <div className="Main-Table">
          </div>
        </div>
      )
    ) : (
      <div className="App-Main">
        <h1>Please select account type to Log-In</h1>
      </div>
    )
  }
}