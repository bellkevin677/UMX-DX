import Events from '../Events';

const Cards = (props) => {
    const MainLabels = [],
        AccountLabels = [];

    props.MainArray.forEach(option => MainLabels.push(option.label));
    props.AccountArray.forEach(option => AccountLabels.push(option.label));

    return <div className="App-Cards">
        {props.AllOptions.map((option, i) => {
            return <div key={i} 
                className="Card"
                onClick={() => {
                    props.SetAppState({ Loading: true });
                    if (AccountLabels.includes(option.label)) {
                        Events.client.request({
                            Oauth2: props.Oauth2,
                            Page: option.value,
                            Property: "AccountIndex",
                            Value: i,
                            SetAppState: props.SetAppState
                        });
                    } else {
                        Events.client.request({
                            Oauth2: props.Oauth2,
                            Page: option.value,
                            Property: "MainIndex",
                            Value: i,
                            SetAppState: props.SetAppState
                        });
                    }
                }}
            >{option.label}</div>
        })}
    </div>
}

export default Cards;