import { NavLink } from 'react-router-dom';

const Cards = (props) => {

    return <div className="App-Cards">
        {props.AllOptions.map((option, i) => {
            return <NavLink key={i} 
                to={option.path}
                className="Card"
                onClick={() => props.RedirectRoute({
                    option: option,
                    index: i
                })}
            >{option.label}</NavLink>
        })}
    </div>
}

export default Cards;