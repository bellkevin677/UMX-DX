import { NavLink } from 'react-router-dom';
import Events from '../Events';

const Header = (props) => {
    
    return <header id="Header" className="App-Header">
        {!props.Oauth2 ? (
            <div className="Header-Main">
                <NavLink 
                    to="/" 
                    className="Header-Link"
                    onClick={() => props.SetAppState({
                        Cerner: null,
                        MainIndex: 0,
                        AccountIndex: 0,
                        DisplayCount: 25,
                        DisplayIndex: 0
                    })}
                >UMX-DX App</NavLink>
                <div className="Header-Nav">
                    <button
                        className="Header-Link"
                        onClick={() => props.SetAppState({ Dropdown: null })}
                        onMouseOver={() => props.SetAppState({ Dropdown: 'Header-Nav' })}
                    >Login</button>
                    {props.Dropdown === 'Header-Nav' ? (
                        <div className="Header-Nav-Dropdown">
                            <NavLink 
                                to="/launch-patient" 
                                className="Header-Nav-Dropdown-Link"
                                activeClassName="Header-Nav-Dropdown-Link-Active"
                                onClick={() => props.SetAppState({ Dropdown: null })}
                            >Patient</NavLink>
                            <NavLink 
                                to="/launch-provider" 
                                className="Header-Nav-Dropdown-Link"
                                activeClassName="Header-Nav-Dropdown-Link-Active"
                                onClick={() => props.SetAppState({ Dropdown: null })}
                            >Provider</NavLink>
                        </div>
                    ) : null }
                </div>
            </div>
        ) : (
            <div className="Header-Main">
                <NavLink 
                    to="/" 
                    className="Header-Link"
                    onClick={() => props.SetAppState({
                        Cerner: null,
                        MainIndex: 0,
                        AccountIndex: 0,
                        DisplayCount: 25,
                        DisplayIndex: 0
                    })}
                >UMX-DX App</NavLink>
                <div className="Header-Nav">
                    <button
                        className="Header-Link"
                        onClick={() => props.SetAppState({ Dropdown: null })}
                        onMouseOver={() => props.SetAppState({ Dropdown: 'Header-Nav' })}
                    >Menu</button>
                    {props.Dropdown === 'Header-Nav' ? (
                        <div className="Header-Nav-Dropdown">
                            {props.AllOptions.map((option, i) => {
                                return <NavLink key={i}
                                    to={option.path}
                                    className="Header-Nav-Dropdown-Link"
                                    activeClassName="Header-Nav-Dropdown-Link-Active"
                                    onClick={() => {
                                        props.SetAppState({ Loading: true, Dropdown: null });
                                        Events.client.request({
                                            Oauth2: props.Oauth2,
                                            Page: option.value,
                                            Property: `${props.PageType}Index`,
                                            Value: i,
                                            SetAppState: props.SetAppState
                                        });
                                    }}
                                >{option.label}</NavLink>
                            })}
                            <NavLink 
                                to="/" 
                                className="Header-Nav-Dropdown-Link"
                                onClick={() => props.SetAppState({
                                    Dropdown: null,
                                    Oauth2: null,
                                    Patient: null,
                                    Cerner: null,
                                    MainIndex: 0,
                                    AccountIndex: 0,
                                    DisplayCount: 25,
                                    DisplayIndex: 0
                                })}
                            >Log Out</NavLink>
                        </div>
                    ) : null }
                </div>
            </div>
        )}
        {SubHeader(props)}
    </header>
};

function SubHeader(props) {

    if (!props.Patient && !props.Cerner) return
    return <div className="Header-Subheader">
        {props.Patient ? (
            <table>
                <thead>
                    {Events.thead.patient()}
                </thead>
                <tbody>
                    {props.Patient.map((entry, index) => {
                        return Events.tbody.patient({
                            index: index,
                            entry: entry
                        });
                    })}
                </tbody>
            </table>
        ) : null }
        {props.Cerner ? (
            <div className="Subheader-Nav">
                <NavLink 
                    to="/" 
                    className="Subheader-Nav-Link"
                    onClick={() => props.SetAppState({
                        Cerner: null,
                        MainIndex: 0,
                        AccountIndex: 0,
                        DisplayCount: 25,
                        DisplayIndex: 0
                    })}
                >Back</NavLink>
                {props.PageArray.map((option, i) => {
                    if (props.PageIndex === i) return <NavLink key={i} 
                        to={option.path}
                        className="Subheader-Nav-Link"
                        activeClassName="Subheader-Nav-Link-Active"
                        onClick={() => {
                            props.SetAppState({ Loading: true });
                            Events.client.request({
                                Oauth2: props.Oauth2,
                                Page: option.value,
                                Property: `${props.PageType}Index`,
                                Value: i,
                                SetAppState: props.SetAppState
                            });
                        }}
                    >{option.label}</NavLink>
                    return <NavLink key={i} 
                        to={option.path}
                        className="Subheader-Nav-Link"
                        activeClassName="Subheader-Nav-Link-Active"
                        onClick={() => {
                            props.SetAppState({ Loading: true });
                            Events.client.request({
                                Oauth2: props.Oauth2,
                                Page: option.value,
                                Property: `${props.PageType}Index`,
                                Value: i,
                                SetAppState: props.SetAppState
                            });
                        }}
                    >{option.label}</NavLink>
                })}
                <div className="Subheader-Nav-Link">
                    <label className="Subheader-Label">
                        Count:
                        <select 
                            className="Subheader-Select"
                            value={props.DisplayCount} 
                            onChange={event => props.SetAppState({ DisplayCount: parseInt(event.target.value), CurrentPage: 1, DisplayIndex: 0 })}
                        >
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                        </select>
                    </label>
                </div>
            </div>
        ) : null }
    </div>

}

export default Header;