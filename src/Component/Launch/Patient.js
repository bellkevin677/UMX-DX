import Spinner from '../Spinner';

const Patient = (props) => {

    props.events.patient.launch();
    return <Spinner/>
};

export default Patient;