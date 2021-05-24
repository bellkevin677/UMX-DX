import { NavLink } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavDropdown,
    Container,
    Row,
    Col,
    Table
} from 'react-bootstrap';
import Events from '../Events';

const Header = (props) => {
    
    return <Navbar 
        style={{ flexFlow: 'row wrap' }}
    >
        {!props.Oauth2 ? (
            <Container 
                fluid
                style={{ display: 'block', margin: 0 }}
            >
                <Row>
                    <Col>
                        <Navbar.Brand
                            as={NavLink}
                            to="/"
                            onClick={() => props.SetAppState({
                                Cerner: null,
                                MainIndex: 0,
                                AccountIndex: 0,
                                DisplayCount: 25,
                                DisplayIndex: 0
                            })}
                        >UMX-DX App</Navbar.Brand>
                    </Col>
                    <Col 
                        as={NavDropdown}
                        title="Login"
                        id="navbarScrollingDropdown"
                    >
                        <NavDropdown.Item as={NavLink} to="/launch-patient">Patient</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/launch-provider">Provider</NavDropdown.Item>
                    </Col>
                </Row>
            </Container>
        ) : (
            <Container 
                fluid
                style={{ display: 'block', margin: 0 }}
            >
                <Row>
                    <Col>
                        <Navbar.Brand
                            as={NavLink}
                            to="/"
                            onClick={() => props.SetAppState({
                                Cerner: null,
                                MainIndex: 0,
                                AccountIndex: 0,
                                DisplayCount: 25,
                                DisplayIndex: 0
                            })}
                        >UMX-DX App</Navbar.Brand>
                    </Col>
                    <Col
                        as={NavDropdown}
                        title="Menu"
                        id="navbarScrollingDropdown"
                    >
                        {props.AllOptions.map((option, i) => {
                            return <NavDropdown.Item 
                                key={i}
                                as={NavLink}
                                to={option.path}
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
                            >{option.label}</NavDropdown.Item>
                        })}
                        <NavDropdown.Divider />
                        <NavDropdown.Item
                            as={NavLink}
                            to="/" 
                            onClick={() => props.SetAppState({
                                Oauth2: null,
                                Patient: null,
                                Cerner: null,
                                MainIndex: 0,
                                AccountIndex: 0,
                                DisplayCount: 25,
                                DisplayIndex: 0
                            })}
                        >Log Out</NavDropdown.Item>
                    </Col>
                </Row>
            </Container>
        )}
        {SubHeader(props)}
    </Navbar>
};

function SubHeader(props) {

    if (!props.Patient && !props.Cerner) return
    return <Container 
        fluid
        style={{ display: 'block', margin: 0 }}
    >
        {props.Patient ? (
            <Row as={Table}>
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
            </Row>
        ) : null }
        {props.Cerner ? (
            <Row as={Nav}>
                <Col>
                    <Nav.Link 
                        as={NavLink}
                        to="/" 
                        onClick={() => props.SetAppState({
                            Cerner: null,
                            MainIndex: 0,
                            AccountIndex: 0,
                            DisplayCount: 25,
                            DisplayIndex: 0
                        })}
                    >Back</Nav.Link>
                </Col>
                {props.PageArray.map((option, i) => {
                    if (props.PageIndex === i) return <Col>
                        <Nav.Link key={i} 
                            as={NavLink}
                            to={option.path}
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
                        >{option.label}</Nav.Link>
                    </Col>
                    return <Col>
                        <Nav.Link key={i} 
                            as={NavLink}
                            to={option.path}
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
                        >{option.label}</Nav.Link>
                    </Col>
                })}
                <Col>
                    <Nav.Link
                        as={NavDropdown}
                        title={`Count: ${props.DisplayCount}`}
                        id="navbarScrollingDropdown"
                    >
                        <NavDropdown.Item
                            onClick={() => props.SetAppState({ DisplayCount: 25, CurrentPage: 1, DisplayIndex: 0 })}
                        >25</NavDropdown.Item>
                        <NavDropdown.Item
                            onClick={() => props.SetAppState({ DisplayCount: 50, CurrentPage: 1, DisplayIndex: 0 })}
                        >50</NavDropdown.Item>
                        <NavDropdown.Item
                            onClick={() => props.SetAppState({ DisplayCount: 100, CurrentPage: 1, DisplayIndex: 0 })}
                        >100</NavDropdown.Item>
                    </Nav.Link>
                </Col>
            </Row>
        ) : null }
    </Container>

}

export default Header;