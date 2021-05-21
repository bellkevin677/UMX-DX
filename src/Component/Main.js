import React from 'react';
import Events from '../Events';
import Cards from './Cards';
import Table from './Table';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentPage: 1
    }
    this.SetMainState = this.SetMainState.bind(this);
  }

  SetMainState(event) {
    this.setState(event);
  }

  componentDidMount() {
    const { Oauth2, Cerner, AccountArray, MainArray, MainIndex, SetAppState } = this.props;
    if (Cerner) {
      Events.client.routeChange({
        PrevScope: AccountArray,
        Oauth2: Oauth2,
        Cerner: Cerner,
        Page: MainArray[MainIndex],
        State: "MainIndex",
        Value: MainIndex,
        SetAppState: SetAppState,
        SetParentState: this.SetMainState
      });
    }
  }

  render() {
    const {
      Oauth2,
      Patient,
      Cerner,
      MainArray,
      MainIndex,
      DisplayCount,
      DisplayIndex,
      SetAppState
    } = this.props, {
      CurrentPage
    } = this.state;

    return Oauth2 ? (
      Cerner ? (
        <Table
          Cerner={Cerner}
          DisplayCount={DisplayCount}
          DisplayIndex={DisplayIndex}
          CurrentPage={CurrentPage}
          SetAppState={SetAppState}
          SetParentState={this.SetMainState}
        />
      ) : (
        <Cards 
          CardArray={MainArray}
          Oauth2={Oauth2}
          State="MainIndex"
          SetAppState={SetAppState}
          SetParentState={this.SetAccountState}
        />
      )
    ) : (
      <div className="App-Main">
        <h1>Please select account type to Log-In</h1>
      </div>
    )
  }
}