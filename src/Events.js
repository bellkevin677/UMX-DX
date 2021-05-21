import FHIR from 'fhirclient';
import { getPath } from 'fhirclient/lib/lib';

const Events = {};

// Launch Events

Events.patient = (props) => {
    FHIR.oauth2.authorize({
        client_id: "efef2e22-0d52-4bfa-ab53-b44456625f2a",
        scope: "user/Patient.read user/Person.read user/Practitioner.read user/RelatedPerson.read patient/AllergyIntolerance.read patient/CarePlan.read patient/Condition.read patient/MedicationStatement.read patient/Observation.read patient/Patient.read patient/Person.read patient/RelatedPerson.read launch/patient online_access openid profile",
        iss: "https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",
        redirectUri: "https://danielmoffitt54.github.io/UMX-DX/"
    }).catch(console.error);
}

Events.provider = (props) => {
    FHIR.oauth2.authorize({
        client_id: "4cfb74e7-deb2-4151-9c22-16eba93fd1ec",
        scope: "patient/Patient.read patient/Observation.read launch online_access openid profile",
        iss: "https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",
        redirectUri: "https://danielmoffitt54.github.io/UMX-DX/"
    }).catch(console.error);
}

// Client Events
Events.client = {};

Events.client.ready = (props) => {
    // Using the values from the authorize return, perform a request using the props Param value.
    // Then always set loading state to false, and if successful set Oauth2 to the authorize return and Cerner to the request return.
    FHIR.oauth2.ready()
        .then(client => {
            client.patient.request("Patient", {
                pageLimit: 0,
                flat: true
            }).then(res => {
                props.SetAppState({ Loading: false, Oauth2: client, Patient: res });
            }).catch(() => props.SetAppState({ Loading: false }));
        }).catch(() => props.SetAppState({ Loading: false }));
}

Events.client.routeChange = (props) => {
    // Test to see if the current Cerner state has another route's resource type.
    // If so, update the Cerner state.
    let newPage = false;
    props.Cerner.forEach(entry => {
        if (props.PrevScope.includes(entry.resourceType)) newPage = true;
    });
    if (newPage) {
        props.SetAppState({ Loading: true });
        Events.client.request(props);
    }
}

Events.client.request = (props) => {
    // Using the current Oauth2 state, perform a request for the route's array at a certain index.
    // Then update the Cerner state, the route's index state, and reset the current display back to 0.
    const client = FHIR.client(props.Oauth2.state);
    client.patient.request(props.Page, {
        pageLimit: 0,
        flat: true
    })
        .then(response => {
            const newRes = [];
            let addEntry = true;
            response.forEach(res => {
                switch (true) {
                    default:
                        addEntry = true;
                        break;
                    case (res.status && res.status === "entered-in-error"):
                    case (res.verificationStatus && res.verificationStatus === "entered-in-error"):
                    case (res.substance && res.substance === "Entered In Error"):
                    case (res.code && res.code.text === "Entered In Error"):
                        addEntry = false;
                        break;
                }
                if (addEntry) newRes.push(res);
            });
            props.SetAppState({ Loading: false, Cerner: newRes, [props.Property]: props.Value, CurrentPage: 1, DisplayIndex: 0 });
        }).catch(() => props.SetAppState({ Loading: false, [props.Property]: props.Value, CurrentPage: 1, DisplayIndex: 0 }));
}

// Table Head Events
Events.thead = {};

Events.thead.observation = () => {
    return <tr>
        <th>Issued Date</th>
        <th>Subject</th>
        <th>Report</th>
        <th>Category</th>
        <th>Status</th>
    </tr>
}

Events.thead.condition = () => {
    return <tr>
        <th>Patient</th>
        <th>Category</th>
        <th>Report</th>
        <th>Initial Date</th>
        <th>Verification Status</th>
        <th>Clinical Status</th>
        <th>Abatement Date</th>
    </tr>
}

Events.thead.medicationstatement = () => {
    return <tr>
        <th>Patient</th>
        <th>Medication</th>
        <th>Dosage</th>
        <th>Status</th>
        <th>Taken</th>
    </tr>
}

Events.thead.allergyintolerance = () => {
    return <tr>
        <th>Patient</th>
        <th>Category</th>
        <th>Substance</th>
        <th>Criticality</th>
        <th>Status</th>
    </tr>
}

Events.thead.patient = () => {
    return <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Birth Date</th>
        <th>Marital Status</th>
    </tr>
}

Events.thead.relatedperson = () => {
    return <tr>
        <th>Patient</th>
        <th>Person</th>
        <th>Gender</th>
        <th>Birth Date</th>
    </tr>
}

// Table Body Events
Events.tbody = {};

Events.tbody.observation = (props) => {
    const issued = new Date(props.entry.issued),
        report = "N/A";
        // getSystemValue(getPath(props.entry, "code.coding") || getPath(props.entry, "code"), "http://snomed.info/sct", props.entry.code.text || "Report Unavailable");

    return <tr key={props.index}>
        <td>{issued.toDateString() || "N/A"}</td>
        <td>{props.entry.subject.reference.split('/')[1] || "N/A"}</td>
        <td>{report || "N/A"}</td>
        <td>{props.entry.category.text || "N/A"}</td>
        <td>{props.entry.status || "N/A"}</td>
    </tr>
}

Events.tbody.condition = (props) => {
    const onset = new Date(props.entry.onsetDateTime),
        abatement = new Date(props.entry.onsetDateTime);

    return <tr key={props.index}>
        <td>{props.entry.patient.display || "N/A"}</td>
        <td>{props.entry.category.text || "N/A"}</td>
        <td>{props.entry.code.text || "N/A"}</td>
        <td>{onset.toDateString() || "N/A"}</td>
        <td>{props.entry.verificationStatus || "N/A"}</td>
        <td>{props.entry.clinicalStatus || "N/A"}</td>
        <td>{abatement.toDateString() || "N/A"}</td>
    </tr>
}

Events.tbody.medicationstatement = (props) => {
    const medication = getSystemValue(getPath(props.entry, "medicationCodeableConcept.coding") || getPath(props.entry, "medicationCodeableConcept.code.coding"), "http://www.nlm.nih.gov/research/umls/rxnorm", "Unnamed Medication(TM)"),
        taken = getPath(props.entry, "wasNotTaken") ? "No" : "Yes" ;

    return <tr key={props.index}>
        <td>{props.entry.patient.display || "N/A"}</td>
        <td>{medication || "N/A"}</td>
        <td>{getPath(props.entry, "dosage.0.text") || "N/A"}</td>
        <td>{props.entry.status || "N/A"}</td>
        <td>{taken || "N/A"}</td>
    </tr>
}

Events.tbody.allergyintolerance = (props) => {
    const allergy = getSystemValue(getPath(props.entry, "substance.coding") || getPath(props.entry, "substance.code.coding"), "http://snomed.info/sct", props.entry.substance.text || "Unnamed Allergy"),
        criticality = props.entry.criticality === "CRITH" ? "High Risk" : "-";

    return <tr>
        <td>{getPath(props.entry, "patient.display") || "N/A"}</td>
        <td>{getPath(props.entry, "category") || "N/A"}</td>
        <td>{allergy || "N/A"}</td>
        <td>{criticality || "N/A"}</td>
        <td>{props.entry.status || "N/A"}</td>
    </tr>
}

Events.tbody.patient = (props) => {
    const maritalStatus = getSystemValue(getPath(props.entry, "maritalStatus.coding") || getPath(props.entry, "maritalStatus.code.coding"), "http://hl7.org/fhir/v3/Marital", props.entry.maritalStatus.text || "Unavailable"),
        birthDate = new Date(props.entry.birthDate);

    return <tr key={props.index}>
        <td>{props.entry.id || "N/A"}</td>
        <td>{getPatientName(props.entry.name) || "N/A"}</td>
        <td>{props.entry.gender || "N/A"}</td>
        <td>{birthDate.toDateString() || "N/A"}</td>
        <td>{maritalStatus || "N/A"}</td>
    </tr>
}

Events.tbody.relatedperson = (props) => {
    const birthDate = new Date(props.entry.birthDate);

    return <tr key={props.index}>
        <td>{props.entry.patient.display || "N/A"}</td>
        <td>{props.entry.name.text || "N/A"}</td>
        <td>{props.entry.gender || "N/A"}</td>
        <td>{birthDate.toDateString() || "N/A"}</td>
    </tr>
}

// Misc Functions

function getPatientName(name = []) {
    let entry = name.find(nameRecord => nameRecord.use === "official") || name[0];
    if (entry) return entry.given.join(" ") + " " + entry.family;
    return undefined;
}

function getSystemValue(array = [], system, str) {
    let out = str;
    const checkSys = array.find(c => c.system === system);
    if (checkSys && checkSys.display) {
        out = checkSys.display;
    }
    return out;
}

export default Events;