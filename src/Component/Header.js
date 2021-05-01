import { Link } from 'react-router-dom';

const Header = (props) => {
    
    return <header className="App-Header">
        <Link to="/" className="Header-Link">UMX-DX App</Link>
        {props.LoggedIn ? (
            <div className="Header-Navbar">
                <Link to="/account" className="Header-Link">Account</Link>
                <Link to="/" className="Header-Link" onClick={() => { if (props.UserLogOut()) props.setAppState('loggedIn', false) }}>Log Out</Link>
            </div>
        ) : (
            <div className="Header-Navbar">
                <Link to="/launch-patient?iss=https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d" className="Header-Link">Patient</Link>
                <Link to="/launch-provider?iss=https://fhir-ehr-code.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d" className="Header-Link">Provider</Link>
            </div>
        ) } 
    </header>;
};

export default Header;