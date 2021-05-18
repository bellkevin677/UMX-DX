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
      MainArray: ["Observation", "Condition", "MedicationStatement", "AllergyIntolerance"],
      MainIndex: 0,
      AccountArray: ["Patient", "Person", "RelatedPerson", "CarePlan"],
      AccountIndex: 0,
      DisplayCount: 25,
      DisplayIndex: 0
    }
    this.SetAppState = this.SetAppState.bind(this);
  }

  SetAppState(event) {
    this.setState(event);
  }

  componentDidMount() {
    const { Cerner } = this.state;
    if (!Cerner) {
      Events.client.ready({
        SetAppState: this.SetAppState
      });
      this.setState({ Loading: true });
    }
  }

  render() {
    const {
      Loading,
      Oauth2,
      Cerner,
      MainArray,
      MainIndex,
      AccountArray,
      AccountIndex,
      DisplayCount,
      DisplayIndex
    } = this.state;

    if (Cerner) console.log("Cerner:", Cerner);

    return <div className="App">
      <Router basename="/UMX-DX">
        {Loading ? null : (
          <Header 
            Oauth2={Oauth2}
            SetAppState={this.SetAppState}
          />
        )}
        <Switch>
          <Route exact path='/'>
            {Loading ? (
              <div className="App-Loading">
                <h1>Please wait...</h1>
              </div>
            ) : (
              <Main 
                Oauth2={Oauth2}
                Cerner={Cerner}
                AccountArray={AccountArray}
                MainArray={MainArray}
                MainIndex={MainIndex}
                DisplayCount={DisplayCount}
                DisplayIndex={DisplayIndex}
                SetAppState={this.SetAppState}
              />
            )}
          </Route>
          <Route path="/account">
            <Account 
              Oauth2={Oauth2}
              Cerner={Cerner}
              MainArray={MainArray}
              AccountArray={AccountArray}
              AccountIndex={AccountIndex}
              DisplayCount={DisplayCount}
              DisplayIndex={DisplayIndex}
              SetAppState={this.SetAppState}
            />
          </Route>
          {!Oauth2 ? (
            <>
              <Route path="/launch-patient">
                <LaunchPatient />
              </Route>
              <Route path="/launch-provider">
                <LaunchProvider />
              </Route> 
            </>
          ) : null }
        </Switch>
      </Router>
    </div>
  }
};