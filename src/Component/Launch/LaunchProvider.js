import { withRouter } from 'react-router-dom';
import Events from '../../Events';

const Provider = () => {

    return Events.provider.launch();
};

const ProviderWithRouter = withRouter(Provider);

export default ProviderWithRouter;