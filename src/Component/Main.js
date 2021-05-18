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
        <div className="App-Main">
          <ul className="Subheader-Nav">
            {MainArray.map((item, i) => {
              if (MainIndex === i) return <li key={i} 
                className="Subheader-Nav-Link Subheader-Nav-Link-Active" 
                onClick={() => Events.client.request({
                  Oauth2: Oauth2,
                  Page: item,
                  State: "MainIndex",
                  Value: i,
                  SetAppState: SetAppState,
                  SetParentState: this.SetMainState
                })}
              >{item}</li>
              return <li key={i} 
                className="Subheader-Nav-Link" 
                onClick={() => Events.client.request({
                  Oauth2: Oauth2,
                  Page: item,
                  State: "MainIndex",
                  Value: i,
                  SetAppState: SetAppState,
                  SetParentState: this.SetMainState
                })}
              >{item}</li>
            })}
            <li className="Subheader-Nav-Link">
              <label className="Subheader-Label">
                Count:
                <select 
                  className="Subheader-Select"
                  value={DisplayCount} 
                  onChange={event => {
                    SetAppState({ DisplayCount: parseInt(event.target.value), DisplayIndex: 0 });
                    this.SetMainState({ CurrentPage: 1 });
                  }}
                >
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </label>
            </li>
          </ul>
          <Table
           Cerner={Cerner}
           DisplayCount={DisplayCount}
           DisplayIndex={DisplayIndex}
           CurrentPage={CurrentPage}
           SetAppState={SetAppState}
           SetParentState={this.SetMainState}
           
          />
        </div>
      ) : (
        <Cards 
          CardArray={MainArray}
        />
      )
    ) : (
      <div className="App-Main">
        <h1>Please select account type to Log-In</h1>
      </div>
    )
  }
}