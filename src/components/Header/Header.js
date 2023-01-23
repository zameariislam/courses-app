import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/logo.png'
import headerBg from '../../assets/images/header-bg.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink} from 'react-router-dom';


const Header = () => {
    return (
        <Navbar style={{ background: `url(${headerBg})` }} collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className='text-white' href="#home">
                    <img width='70px' src={logo} alt="" />
                    React-Bootstrap
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <NavLink className='text-white' to="/">Home</NavLink>
                        <NavLink className='text-white' to="/about">About</NavLink>
                        <NavLink className='text-white' to="/contact">Contact</NavLink>
                        <NavLink className='text-white' to="courses">Courses</NavLink>
                        <NavLink className='text-white' to="/course-feature">Feature Courses</NavLink>
                        <NavLink className='text-white' to="/cart">
                         
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <Badge style={{color:'yellow',background:"orange"}} >
                            0
                        </Badge>
                         
                        
                        </NavLink>
                        <NavLink className='text-white' to="/signup">Sign Up</NavLink>
                        <NavLink className='text-white' to="/login">Log in</NavLink>
 
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
    );
};

export default Header;