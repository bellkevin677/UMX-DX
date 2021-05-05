import React from 'react';
import Events from '../Events';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: true,
      Display: "Observation",
      Data: null
    }
    this.setMainState = this.setMainState.bind(this);
  }

  setMainState(event) {
    this.setState(event);
  }

  componentDidMount() {
    const { Cerner } = this.props,
      { Display, Data } = this.state;
    if (Cerner && !Data) {
      Events.client.request(Display, this.setMainState);
    }
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