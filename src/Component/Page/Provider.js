import { withRouter } from 'react-router-dom';
import Events from '../../Events';

const Provider = () => {

    Events.provider.ready();
    
    return <div>
        <h1>Provider Page</h1>
    </div>
};

const ProviderWithRouter = withRouter(Provider);

export default ProviderWithRouter;