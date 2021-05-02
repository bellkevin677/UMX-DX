import { NavLink } from 'react-router-dom';

const Header = (props) => {
    
    return <header className="App-Header">
        <NavLink 
            to="/" 
            className="Header-Link"
            activeClassName="Header-Link-Selected"
        >UMX-DX App</NavLink>
        {props.LoggedIn ? (
            <div className="Header-Navbar">
                <NavLink 
                    to="/patient" 
                    className="Header-Link"
                    activeClassName="Header-Link-Selected"
                >Patient</NavLink>
                <NavLink 
                    to="/provider" 
                    className="Header-Link"
                    activeClassName="Header-Link-Selected"
                >Provider</NavLink>
            </div>
        ) : (
            <div className="Header-Navbar">
                <NavLink 
                    to="/launch-patient" 
                    className="Header-Link"
                    activeClassName="Header-Link-Selected"
                >Patient</NavLink>
                <NavLink 
                    to="/launch-provider" 
                    className="Header-Link"
                    activeClassName="Header-Link-Selected"
                >Provider</NavLink>
            </div>
        )}
    </header>;
};

export default Header;