import { Link } from 'react-router-dom';

const Header = (props) => {
    
    return <header className="App-Header">
        <Link 
            to="/UMX-DX" 
            className="Header-Link"
        >UMX-DX App</Link>
        {props.LoggedIn ? (
            <div className="Header-Navbar">
                <Link 
                    to="/UMX-DX/patient" 
                    className="Header-Link"
                >Patient</Link>
                <Link 
                    to="/UMX-DX/provider" 
                    className="Header-Link"
                >Provider</Link>
            </div>
        ) : (
            <div className="Header-Navbar">
                <Link 
                    to="/UMX-DX/launch-patient" 
                    className="Header-Link"
                >Patient</Link>
                <Link 
                    to="/UMX-DX/launch-provider" 
                    className="Header-Link"
                >Provider</Link>
            </div>
        )}
    </header>;
};

export default Header;