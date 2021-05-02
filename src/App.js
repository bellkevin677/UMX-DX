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
// import LaunchProvider from './Component/Launch/LaunchProvider';
import './App.css';
import Events from './Events';

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
    Events.patient.ready();
    props.setAppState({ LoggedIn: true });
  }

  return <Switch>
    <Route exact path='/'>
      <Main 
        LoggedIn={props.LoggedIn}
        Authorized={props.Authorized}
        SetAppState={props.SetAppState}
      />
    </Route>
    <Route path="/launch-patient">
      <LaunchPatient />
    </Route>
    {/* <Route path="/launch-provider">
      <LaunchProvider />
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
      <Router basename="/UMX-DX">
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
};