import { withRouter } from 'react-router-dom';
import Events from '../../Events';

const Patient = () => {

    Events.patient.ready();

    return <div>
        <h1>Patient Page</h1>
    </div>
};

const PatientWithRouter = withRouter(Patient);

export default PatientWithRouter;