import Events from '../Events';

const Cards = (props) => {

    return <div className="App-Cards">
        {props.CardArray.map((title, index) => {
            return <div key={index} 
                className="Card"
                onClick={() => {
                    props.SetAppState({ Loading: true });
                    Events.client.request({
                        Oauth2: props.Oauth2,
                        Page: title,
                        State: props.State,
                        Value: index,
                        SetAppState: props.SetAppState,
                        SetParentState: props.SetParentState
                    });
                }}
            >
                <a className="Card-Title">{title}</a>
            </div>
        })}
    </div>
}

export default Cards;