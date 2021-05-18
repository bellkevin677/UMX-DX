

const Cards = (props) => {

    return <div className="App-Cards">
        {props.CardArray.map((title, index) => {
            <div key={index} className="Card">
                <h1>{title}</h1>
            </div>
        })}
    </div>
}

export default Cards;