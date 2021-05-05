import React from 'react';
import Table from './Table/Table';

export default class Account extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const {
            Cerner
        } = this.props,
            account = Cerner.entry[0],
            personalTable = [
                {
                    account: account.resource.resourceType,
                    gender: account.resource.gender,
                    birthDate: account.resource.birthDate,
                    address: account.resource.address[0].text,
                    language: account.resource.communication[0].language.coding[0].display,
                    maritalStatus: account.resource.maritalStatus.text,
                }
            ];

        return <div className="App-Account">
            {account.resource.address.length > 0 ? (
                <Table 
                    Title="Personal"
                    Data={personalTable}
                />
            ) : null }
            {account.resource.careProvider.length > 0 ? (
                <Table 
                    Title="Care Provider"
                    Data={account.resource.careProvider}
                />
            ) : null }
            {account.resource.telecom.length > 0 ? (
                <Table 
                    Title="Communication"
                    Data={account.resource.telecom}
                />
            ) : null }
            {account.resource.contact.length > 0 ? (
                <Table 
                    Title="Contact"
                    Data={account.resource.contact}
                />
            ) : null }
        </div>
    }
}