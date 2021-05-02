import Events from '../../Events';

const Provider = () => {

    Events.provider.ready();
    
    return <div>
        <h1>Provider Page</h1>
    </div>
};

export default Provider;