import { withRouter } from 'react-router';
import Events from '../../Events';

const Patient = () => {
    
    return Events.patient.launch();
};

const PatientWithRouter = withRouter(Patient);

export default PatientWithRouter;