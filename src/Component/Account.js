import React from 'react';
import Events from '../Events';
import Cards from './Cards';
import Table from './Table';

export default class Account extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        CurrentPage: 1
      }
      this.SetAccountState = this.SetAccountState.bind(this);
    }
  
    SetAccountState(event) {
      this.setState(event);
    }

    componentDidMount() {
      const { Oauth2, Cerner, MainArray, AccountArray, AccountIndex, SetAppState } = this.props;
      if (Cerner) {
        Events.client.routeChange({
          PrevScope: MainArray,
          Oauth2: Oauth2,
          Cerner: Cerner,
          Page: AccountArray[AccountIndex],
          State: "AccountIndex",
          Value: AccountIndex,
          SetAppState: SetAppState,
          SetParentState: this.SetAccountState
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
        } = this.props, {
            CurrentPage
        } = this.state;

        return Cerner ? (
            <div className="App-Account">
                <ul className="Subheader-Nav">
                    {AccountArray.map((item, i) => {
                        if (AccountIndex === i) return <li key={i} 
                            className="Subheader-Nav-Link Subheader-Nav-Link-Active" 
                            onClick={() => Events.client.request({
                                Oauth2: Oauth2,
                                Page: item,
                                State: "AccountIndex",
                                Value: i,
                                SetAppState: SetAppState,
                                SetParentState: this.SetAccountState
                            })}
                        >{item}</li>
                        return <li key={i} 
                            className="Subheader-Nav-Link" 
                            onClick={() => Events.client.request({
                                Oauth2: Oauth2,
                                SetAppState: SetAppState,
                                Page: item,
                                State: "AccountIndex",
                                Value: i,
                                SetAppState: SetAppState,
                                SetParentState: this.SetAccountState
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
                                    this.SetAccountState({ CurrentPage: 1 });
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
                    SetParentState={this.SetAccountState}
                />
            </div>
        ) : (
            <Cards 
                CardArray={AccountArray}
            />
        )
    }
}