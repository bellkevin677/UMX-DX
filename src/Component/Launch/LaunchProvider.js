import { withRouter } from 'react-router-dom';
import Events from '../../Events';

const Provider = () => {

    Events.provider();
    return <div className="App-Launch">
        <h1>Please wait...</h1>
    </div>
};

const ProviderWithRouter = withRouter(Provider);

export default ProviderWithRouter;