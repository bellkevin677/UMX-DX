import React from 'react';
import LogIn from './LogIn';
import Spinner from '../Spinner';

export default class Main extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const {
            LoggedIn,
            Authorized,
            setAppState,
            UserLogIn
        } = this.props;

        return <div className="App-Main">
            {!LoggedIn ? (
                !Authorized ? (
                    <>
                        <h1>Please Select Account Type</h1>
                    </>
                ) : (
                    <LogIn
                        setAppState={setAppState}
                        UserLogIn={UserLogIn}
                    />
                )
            ) : (
                <h1>Main Page</h1>
            )}
        </div>;
    }
};