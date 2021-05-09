import React from 'react';
import Events from '../Events';
import Table from './Table';

export default class Main extends React.Component {

  componentDidMount() {
    const { Oauth2, Cerner, AccountArray, MainArray, MainIndex, SetAppState } = this.props;
    if (Cerner) {
      Events.client.routeChange({
        PrevScope: AccountArray,
        Oauth2: Oauth2,
        Cerner: Cerner,
        SetAppState: SetAppState,
        Page: MainArray[MainIndex],
        State: "MainIndex",
        Value: MainIndex
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
    } = this.props;

    return Cerner ? (
      <div className="App-Main">
        <ul className="Subheader-Nav">
          {MainArray.map((item, i) => {
            if (MainIndex === i) return <li key={i} 
              className="Subheader-Nav-Link Subheader-Nav-Link-Active" 
              onClick={() => Events.client.request({
                Oauth2: Oauth2,
                SetAppState: SetAppState,
                Page: item,
                State: "MainIndex",
                Value: i
              })}
            >{item}</li>
            return <li key={i} 
              className="Subheader-Nav-Link" 
              onClick={() => Events.client.request({
                Oauth2: Oauth2,
                SetAppState: SetAppState,
                Page: item,
                State: "MainIndex",
                Value: i
              })}
            >{item}</li>
          })}
          <li className="Subheader-Nav-Link">
            <label className="Subheader-Count">
              Count:
              <select 
                value={DisplayCount} 
                onChange={event => SetAppState({ 
                  DisplayCount: event.target.value,
                  DisplayIndex: 0
                })}
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
         SetAppState={SetAppState}
        />
      </div>
    ) : (
      <div className="App-Main">
        <h1>Please select account type to Log-In</h1>
      </div>
    )
  }
}