import { withRouter } from 'react-router';
import Events from '../../Events';

const Patient = () => {

    Events.patient.launch();
    return <div className="App-Launch">
        <h1>Please wait...</h1>
    </div>
};

const PatientWithRouter = withRouter(Patient);

export default PatientWithRouter;