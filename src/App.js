import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import Header from './Component/Header';
import Main from './Component/Main';
import LaunchPatient from './Component/Launch/LaunchPatient';
import Patient from './Component/Page/Patient';
import LaunchProvider from './Component/Launch/LaunchProvider';
import Provider from './Component/Page/Provider';
import Events from './Events';
import './App.css';

function UseQuery() {
    return new URLSearchParams(useLocation().search);
}

function RouterSwitch(props) {
  let code = false, state = false;
  const Query = [...UseQuery().entries()];

  Query.forEach(entry => {
    if (entry[1] === 'code') {
      code = true;
    } else if (entry[1] === 'state') state = true;
  });

  if (code && state) {
    props.setAppState({ LoggedIn: true })
    Events.patient.ready();
  }

  return <Switch>
    <Route path='/UMX-DX/'>
      <Main 
        LoggedIn={props.LoggedIn}
        Authorized={props.Authorized}
        SetAppState={props.SetAppState}
      />
    </Route>
    <Route path="/UMX-DX/launch-patient">
      <LaunchPatient />
    </Route>
    <Route path="/UMX-DX/patient">
      <Patient />
    </Route>
    <Route path="/UMX-DX/launch-provider">
      <LaunchProvider />
    </Route>
    <Route path="/UMX-DX/provider">
      <Provider />
    </Route>
    {/* <Route>
      <NoMatch /> 404 Page
    </Route> */}
  </Switch>
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LoggedIn: false,
      Authorized: false,
    }
    this.setAppState = this.setAppState.bind(this);
  }

  setAppState(event) {
    this.setState(event);
  }

  render() {
    const {
      LoggedIn,
      Authorized
    } = this.state;

    return <div className="App">
      <Router>
        <Header 
          LoggedIn={LoggedIn}
        />
        <RouterSwitch 
          LoggedIn={LoggedIn}
          Authorized={Authorized}
          SetAppState={this.setAppState}
        />
      </Router>
    </div>
  }
}