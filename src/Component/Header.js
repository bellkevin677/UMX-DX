import { NavLink } from 'react-router-dom';

const Header = (props) => {
    
    return <header className="App-Header">
        <NavLink 
            to="/" 
            className="Header-Link"
        >UMX-DX App</NavLink>
        {props.Cerner ? (
            <div className="Header-Navbar">
                <NavLink 
                    to="/account" 
                    className="Header-Link"
                    activeClassName="Header-Link-Selected"
                >{props.Cerner.entry[0].resource.name[0].text}</NavLink>
            </div>
        ) : (
            <div className="Header-Navbar">
                <NavLink 
                    to="/launch-patient" 
                    className="Header-Link"
                    activeClassName="Header-Link-Selected"
                >Patient</NavLink>
                {/* <NavLink 
                    to="/launch-provider" 
                    className="Header-Link"
                    activeClassName="Header-Link-Selected"
                >Provider</NavLink> */}
            </div>
        )}
    </header>
};

export default Header;