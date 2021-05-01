import FHIR from 'fhirclient';

const Event = {};

// User events
Event.user = {};

Event.user.logIn = (props) => {
    console.log("Log-In");
    return true;
} 

Event.user.logOut = (props) => {
    console.log("Log-Out");
    return true;
}

// FHIR events
Event.patient = {};
Event.provider = {};

Event.patient.launch = (props) => {
    FHIR.oauth2.authorize({
        "client_id": "efef2e22-0d52-4bfa-ab53-b44456625f2a",
        "scope": "'patient/Patient.read patient/Observation.read launch/patient online_access openid profile'"
    }).catch(console.error);
}

Event.provider.launch = (props) => {
    FHIR.oauth2.authorize({
        "client_id": "4cfb74e7-deb2-4151-9c22-16eba93fd1ec",
        "scope": "'patient/Patient.read patient/Observation.read online_access openid profile'"
    }).then(console.log).catch(console.error);
}



export default Event;