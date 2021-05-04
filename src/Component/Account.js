import React from 'react';
import Table from './Table/Table';

export default class Account extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            Cerner
        } = this.props,
            account = Cerner.entry[0];

        return <div className="App-Account">
            {account.resource.telecom.length > 0 ? (
                <Table 
                    Title="Communication"
                    Array={account.resource.telecom}
                />
            ) : null }
            {account.resource.careProvider.length > 0 ? (
                <Table 
                    Title="Care Provider"
                    Array={account.resource.careProvider}
                />
            ) : null }
            {account.resource.contact.length > 0 ? (
                <Table 
                    Title="Contact"
                    Array={account.resource.contact}
                />
            ) : null }
        </div>
    }
}