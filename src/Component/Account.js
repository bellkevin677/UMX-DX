import React from 'react';
import Events from '../Events';
import Table from './Table';

export default class Account extends React.Component {

    componentDidMount() {
      const { Oauth2, Cerner, MainArray, AccountArray, AccountIndex, SetAppState } = this.props;
      if (Cerner) {
        Events.client.routeChange({
          PrevScope: MainArray,
          Oauth2: Oauth2,
          Cerner: Cerner,
          SetAppState: SetAppState,
          Page: AccountArray[AccountIndex],
          State: "AccountIndex",
          Value: AccountIndex
        });
      }
    }

    render() {
        const {
            Oauth2,
            Cerner,
            AccountArray,
            AccountIndex,
            DisplayCount,
            DisplayIndex,
            SetAppState
        } = this.props;

        return <div className="App-Account">
            <ul className="Subheader-Nav">
                {AccountArray.map((item, i) => {
                    if (AccountIndex === i) return <li key={i} 
                        className="Subheader-Nav-Link Subheader-Nav-Link-Active" 
                        onClick={() => Events.client.request({
                            Oauth2: Oauth2,
                            SetAppState: SetAppState,
                            Page: item,
                            State: "AccountIndex",
                            Value: i
                        })}
                    >{item}</li>
                    return <li key={i} 
                        className="Subheader-Nav-Link" 
                        onClick={() => Events.client.request({
                            Oauth2: Oauth2,
                            SetAppState: SetAppState,
                            Page: item,
                            State: "AccountIndex",
                            Value: i
                        })}
                    >{item}</li>
                })}
                <li className="Subheader-Nav-Link">
                    <label className="Subheader-Count">
                        Count:
                        <select value={DisplayCount} onChange={event => SetAppState({ DisplayCount: event.target.value })}>
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
    }
}