import Events from "../../Events";

const Patient = () => {

    Events.patient.ready();

    return <div>
        <h1>Patient Page</h1>
    </div>
};

export default Patient;