import { Link } from 'react-router-dom';

const Header = (props) => {
    
    return <header className="App-Header">
        <Link to="/UMX-DX/" className="Header-Link">UMX-DX App</Link>
        {props.LoggedIn ? (
            <div className="Header-Navbar">
                <Link to="/UMX-DX/account" className="Header-Link">Account</Link>
                <Link to="/UMX-DX/" className="Header-Link" onClick={() => { if (props.UserLogOut()) props.setAppState('loggedIn', false) }}>Log Out</Link>
            </div>
        ) : (
            <div className="Header-Navbar">
                <Link to="/UMX-DX/launch-patient?iss=https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d" className="Header-Link">Patient</Link>
                <Link to="/UMX-DX/launch-provider" className="Header-Link">Provider</Link>
            </div>
        ) } 
    </header>;
};

export default Header;