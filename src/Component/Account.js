import React from 'react';
import Table from './Table/Table';

export default class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Loading: false
        }
    }

    RenderTable = (Title, account) => {
        const personalTable = [
            {
                account: account.resource.resourceType,
                gender: account.resource.gender,
                birthDate: account.resource.birthDate,
                address: account.resource.address[0].text,
                language: account.resource.communication[0].language.coding[0].display,
                maritalStatus: account.resource.maritalStatus.text,
            }
        ];

        switch(true) {
            case (Title === "Personal"):
                return <Table 
                    Title={Title}
                    Data={personalTable}
                />
            case (Title === "Care Provider" && account.resource.careProvider.length > 0):
                return <Table 
                    Title={Title}
                    Data={account.resource.careProvider}
                />
            case (Title === "Communication" && account.resource.telecom.length > 0):
                return <Table 
                    Title={Title}
                    Data={account.resource.telecom}
                />
            case (Title === "Contact" && account.resource.contact.length > 0):
                return <Table 
                    Title={Title}
                    Data={account.resource.contact}
                />
            default:
                return <div>
                    <h1>An error has occured.</h1>
                </div>
        }
    }

    render() {
        const {
            Cerner,
            AccountArray,
            AccountIndex,
            SetAppState
        } = this.props, {
            Loading
        } = this.state,
            account = Cerner.entry[0];

        return Loading ? (
          <div className="App-Account">
            <h1>Please wait...</h1>
          </div>
        ) : (
          <div className="App-Account">
            <ul className="Account-Nav">
              {AccountArray.map((item, i) => {
                if (AccountIndex === i) return <li key={i} 
                  className="Account-Nav-Link Account-Nav-Link-Active" 
                  onClick={() => SetAppState({ AccountIndex: i })}
                >{item}</li>
                return <li key={i} 
                  className="Account-Nav-Link" 
                  onClick={() => SetAppState({ AccountIndex: i })}
                >{item}</li>
              })}
            </ul>
            {this.RenderTable(AccountArray[AccountIndex], account)}
          </div>
        )
    }
}