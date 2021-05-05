import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Component/Header';
import Main from './Component/Main';
import LaunchPatient from './Component/Launch/LaunchPatient';
// import LaunchProvider from './Component/Launch/LaunchProvider';
import Account from './Component/Account';
import './App.css';
import Events from './Events';

function RouterSwitch(props) {

  return <Switch>
    <Route exact path='/'>
      {props.Loading ? (
        <div className="App-Main">
          <h1>Please wait...</h1>
        </div>
      ) : (
        <Main 
          Cerner={props.Cerner}
          SetAppState={props.SetAppState}
        />
      )}
    </Route>
    <Route path="/launch-patient">
      <LaunchPatient />
    </Route>
    <Route path="/launch-provider">
      <LaunchProvider />
    </Route>
    <Route path="/account">
      <Account 
        Cerner={props.Cerner}/>
    </Route>
  </Switch>
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false,
      Cerner: null
    }
    this.setAppState = this.setAppState.bind(this);
  }

  setAppState(event) {
    this.setState(event);
  }

  componentDidMount() {
    if (!this.state.Cerner) {
      Events.patient.ready(this.setAppState);
      Events.provider.ready(this.setAppState);
      this.setState({ Loading: true });
    }
  }

  render() {
    const {
      Loading,
      Cerner
    } = this.state;

    if (Cerner) console.log("Cerner:", Cerner);

    return <div className="App">
      <Router basename="/UMX-DX">
        {Loading ? (
          <header className="App-Header"></header>
        ) : (
          <Header 
            Cerner={Cerner}
          />
        )}
        <RouterSwitch 
          Loading={Loading}
          Cerner={Cerner}
          SetAppState={this.setAppState}
        />
      </Router>
    </div>
  }
};