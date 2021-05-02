import { NavLink } from 'react-router-dom';

const Header = (props) => {
    
    return <header className="App-Header">
        <NavLink 
            to="/" 
            activeClassName="Header-Link-Selected"
            className="Header-Link"
        >UMX-DX App</NavLink>
        {props.LoggedIn ? (
            <div className="Header-Navbar">
                <NavLink 
                    to="/patient" 
                    activeClassName="Header-Link-Selected"
                    className="Header-Link"
                >Patient</NavLink>
                <NavLink 
                    to="/provider" 
                    activeClassName="Header-Link-Selected"
                    className="Header-Link"
                >Provider</NavLink>
            </div>
        ) : (
            <div className="Header-Navbar">
                <NavLink 
                    to="/launch-patient" 
                    activeClassName="Header-Link-Selected"
                    className="Header-Link"
                >Patient</NavLink>
                <NavLink 
                    to="/launch-provider" 
                    activeClassName="Header-Link-Selected"
                    className="Header-Link"
                >Provider</NavLink>
            </div>
        )}
    </header>;
};

export default Header;