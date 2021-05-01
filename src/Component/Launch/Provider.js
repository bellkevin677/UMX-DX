import Spinner from '../Spinner';

const Provider = (props) => {
    props.events.provider.launch();
    return <Spinner/>
};

export default Provider;