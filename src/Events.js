import FHIR from 'fhirclient';

const Events = {};

// Patient events
Events.patient = {};

Events.patient.launch = (props) => {
    FHIR.oauth2.authorize({
        client_id: "efef2e22-0d52-4bfa-ab53-b44456625f2a",
        scope: "patient/Patient.read patient/Observation.read launch/patient online_access openid profile",
        iss: "https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",
        redirectUri: "https://danielmoffitt54.github.io/UMX-DX/patient"
    }).catch(console.error);
}

Events.patient.ready = (props) => {
    FHIR.oauth2.ready()
        .then(client => client.request("Patient"))
        .then(console.log)
        .catch(console.error);
}

// Provider events
Events.provider = {};

Events.provider.launch = (props) => {
    FHIR.oauth2.authorize({
        client_id: "4cfb74e7-deb2-4151-9c22-16eba93fd1ec",
        scope: "patient/Patient.read patient/Observation.read launch online_access openid profile",
        redirectUri: "https://danielmoffitt54.github.io/UMX-DX/provider"
    }).then(console.log).catch(console.error);
}

Events.provider.ready = (props) => {
    FHIR.oauth2.ready()
        .then(client => client.request("Provider"))
        .then(console.log)
        .catch(console.error);
}

export default Events;