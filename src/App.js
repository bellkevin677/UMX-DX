import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Events from './Events';
import Header from './Component/Header';
import Cards from './Component/Cards';
import Table from './Component/Table';
import LaunchPatient from './Component/Launch/LaunchPatient';
import LaunchProvider from './Component/Launch/LaunchProvider';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false,
      Dropdown: null,
      Oauth2: null,
      Patient: null,
      Cerner: null,
      CurrentPage: 0,
      DisplayIndex: 0,
      DisplayCount: 25,
      MainIndex: 0,
      MainArray: [
        { 
          label: "Observations",
          value: "Observation",
          path: "/observations"
        } , {
          label: "Conditions",
          value: "Condition",
          path: "/conditions"
        } , {
          label: "Medications",
          value: "MedicationStatement",
          path: "/medications"
        } , {
          label: "Allergies",
          value: "AllergyIntolerance",
          path: "/allergies"
        }
      ],
      AccountIndex: 0,
      AccountArray: [
        { 
          label: "Account",
          value: "Patient",
          path: "/account"
        } , {
          label: "Relatives",
          value: "RelatedPerson",
          path: "/relatives"
        } , {
          label: "Care Plan",
          value: "CarePlan",
          path: "/care-plan"
        }
      ]
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
      Dropdown,
      Oauth2,
      Patient,
      Cerner,
      CurrentPage,
      DisplayIndex,
      DisplayCount,
      MainIndex,
      MainArray,
      AccountIndex,
      AccountArray,
    } = this.state,
      AllOptions = MainArray.concat(AccountArray);

    if (Cerner) console.log("Cerner:", Cerner);

    return <div className="App">
      <Router basename="/UMX-DX">
        <GetHeader 
          AllOptions={AllOptions}
          Dropdown={Dropdown}
          Oauth2={Oauth2}
          Patient={Patient}
          Cerner={Cerner}
          CurrentPage={CurrentPage}
          DisplayIndex={DisplayIndex}
          DisplayCount={DisplayCount}
          MainIndex={MainIndex}
          MainArray={MainArray}
          AccountIndex={AccountIndex}
          AccountArray={AccountArray}
          SetAppState={this.SetAppState}
        />
        <Switch>
          <Route exact path='/'>
            {Loading ? (
              <div className="App-Loading">
                <h1>Please wait...</h1>
              </div>
            ) : (
              !Oauth2 ? (
                <div className="App-Login">
                  <h1>Please Login to Continue</h1>
                </div>
              ) : null
            )}
          </Route>
          {AllOptions.map((option, index) => {
            return <Route key={index} path={option.path}>
            {Loading ? (
              <div className="App-Loading">
                <h1>Please wait...</h1>
              </div>
            ) : (
              !Cerner || Cerner.length === 0 ? (
                  <div className="App-Error">
                    <h1>Error Retrieveing Data</h1>
                  </div>
              ) : (
                <Table
                  Cerner={Cerner}
                  DisplayCount={DisplayCount}
                  DisplayIndex={DisplayIndex}
                  CurrentPage={CurrentPage}
                  SetAppState={this.SetAppState}
                />
              )
            )}
            </Route>
          })}
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
      {Oauth2 ? (
        <Cards 
          Oauth2={Oauth2}
          AllOptions={AllOptions}
          MainArray={MainArray}
          AccountArray={AccountArray}
          SetAppState={this.SetAppState}
        />
      ) : null }
    </div>
  }
};

function GetHeader(props) {
  const MainLabels = [],
    AccountLabels = [];
  let includedAccount = false;

  props.MainArray.forEach(option => MainLabels.push(option.label));
  props.AccountArray.forEach(option => {
    if (props.Cerner && option.value === props.Cerner[0].resourceType) includedAccount = true;
    AccountLabels.push(option.label)
  });

  switch (true) {
    case includedAccount:
      return <Header 
        AllOptions={props.AllOptions}
        Dropdown={props.Dropdown}
        Oauth2={props.Oauth2}
        Patient={props.Patient}
        Cerner={props.Cerner}
        CurrentPage={props.CurrentPage}
        DisplayIndex={props.DisplayIndex}
        DisplayCount={props.DisplayCount}
        MainLabels={MainLabels}
        AccountLabels={AccountLabels}
        PageType="Account"
        PageIndex={props.AccountIndex}
        PageArray={props.AccountArray}
        SetAppState={props.SetAppState}
      />
    default:
      return <Header 
        AllOptions={props.AllOptions}
        Dropdown={props.Dropdown}
        Oauth2={props.Oauth2}
        Patient={props.Patient}
        Cerner={props.Cerner}
        CurrentPage={props.CurrentPage}
        DisplayIndex={props.DisplayIndex}
        DisplayCount={props.DisplayCount}
        MainLabels={MainLabels}
        AccountLabels={AccountLabels}
        PageType="Main"
        PageIndex={props.MainIndex}
        PageArray={props.MainArray}
        SetAppState={props.SetAppState}
      />
  }
}