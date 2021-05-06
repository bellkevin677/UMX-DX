import React from 'react';
import Events from '../Events';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false,
      Data: null
    }
    this.setMainState = this.setMainState.bind(this);
  }

  setMainState(event) {
    this.setState(event);
  }

  componentDidMount() {
    const { Oauth2 } = this.props, { Data } = this.state;
    if (!Data && Oauth2) {
      Events.client.request(Oauth2, this.setMainState, "Patient")
      this.setState({ Loading: true });
    }
  }

  render() {
    const {
      Oauth2,
      MainArray,
      MainIndex,
      SetAppState
    } = this.props, {
      Loading,
      Data
    } = this.state;

    if (Data) console.log("Data:", Data);

    return Oauth2 ? (
      Loading ? (
        <div className="App-Main">
          <h1>Please wait...</h1>
        </div>
      ) : (
        <div className="App-Main">
          <ul className="Main-Nav">
            {MainArray.map((item, i) => {
              if (MainIndex === i) return <li key={i} 
                className="Main-Nav-Link Main-Nav-Link-Active" 
                onClick={() => SetAppState({ MainIndex: i })}
              >{item}</li>
              return <li key={i} 
                className="Main-Nav-Link" 
                onClick={() => SetAppState({ MainIndex: i })}
              >{item}</li>
            })}
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