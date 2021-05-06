import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Component/Header';
import Main from './Component/Main';
import LaunchPatient from './Component/Launch/LaunchPatient';
import LaunchProvider from './Component/Launch/LaunchProvider';
import Account from './Component/Account';
import './App.css';
import Events from './Events';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false,
      Oauth2: null,
      Cerner: null,
      AccountArray: ["Personal", "Care Provider", "Communication", "Contact"],
      MainArray: ["Observation", "Tab2", "Tab3"],
      AccountIndex: 0,
      MainIndex: 0
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
      Oauth2,
      Cerner,
      AccountArray,
      MainArray,
      AccountIndex,
      MainIndex
    } = this.state;

    if (Oauth2) console.log("Oauth2:", Oauth2);
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
        <Switch>
          <Route exact path='/'>
            {Loading ? (
              <div className="App-Main">
                <h1>Please wait...</h1>
              </div>
            ) : (
              <Main 
                Oauth2={Oauth2}
                MainArray={MainArray}
                MainIndex={MainIndex}
                SetAppState={this.setAppState}
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
              Cerner={Cerner}
              AccountArray={AccountArray}
              AccountIndex={AccountIndex}
              SetAppState={this.setAppState}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  }
};