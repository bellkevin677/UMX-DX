import React from 'react';
import {  
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Spinner from './Component/Spinner';
import Header from './Component/Header';
import Main from './Component/Main/Main';
import Account from './Component/Account/Account';
import Patient from './Component/Launch/Patient';
import Provider from './Component/Launch/Provider';
import Events from './Events';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: Events,
      loggedIn: false,
      authorized: false,
    }
    this.setAppState = this.setAppState.bind(this);
  }

  setAppState(state, val) {
    this.setState({ [state]: val });
  }

  render() {
    const { 
      events,
      loggedIn,
      authorized
    } = this.state;

    return <div className="App">
      <Router>
        <Header
          LoggedIn={loggedIn}
          setAppState={this.setAppState}
          UserLogOut={events.user.logOut}
        />
        <Switch>
          <Route exact path='/'>
            <React.Suspense fallback={<Spinner/>}>
              <Main
                LoggedIn={loggedIn}
                Authorized={authorized}
                setAppState={this.setAppState}
                UserLogIn={events.user.logIn}
              />
            </React.Suspense>
          </Route>
          <Route path="/launch-patient?iss=https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d">
            <React.Suspense fallback={<Spinner/>}>
              <Patient events={events}/>
            </React.Suspense>
          </Route>
          <Route path="/launch-provider?iss=https://fhir-ehr-code.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d">
            <React.Suspense fallback={<Spinner/>}>
              <Provider events={events}/>
            </React.Suspense>
          </Route>
          <Route path='/account'>
            <React.Suspense fallback={<Spinner/>}>
              <Account/>
            </React.Suspense>
          </Route>
        </Switch>
      </Router>
    </div>
  }
}