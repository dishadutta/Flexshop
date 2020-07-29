import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button, Navbar, Nav, FormControl, Form, NavDropdown } from 'react-bootstrap';

class HeadNav extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="light">

          <Nav className="mr-auto" style={{marginLeft: "160px"}}>
            <Nav>
              <i class="far fa-thumbs-up logos fa-2x" style={{color:"#C3164A"}}></i>
              <p  className="download">SATISFACTION<br/><span className="play">100% guaranteed</span></p>
            </Nav>
            <Nav style={{marginLeft:"40px", marginRight:"40px"}}>
              <i class="fas fa-truck logos fa-2x" style={{color:"#1781C8"}}></i>
              <p className="download">  FREE SHIPPING<br/><span className="play">On orders over $99</span></p>
            </Nav>
            <Nav>
              <i class="fas fa-sync-alt logos fa-2x" style={{color:"#F18717"}}></i>
              <p className="download">MONEY BACK 100%<br/><span className="play">Easy return</span></p>
            </Nav>
          </Nav>

          <Form inline style={{marginRight:"160px"}}>
            <Nav className="mr-auto">
              <NavDropdown title="Currency:USD" id="collasible-nav-dropdown"  style={{color:"#717669"}}>
                <NavDropdown.Item href="#action/3.1">Dollar(USD)</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Euro(EUR)</NavDropdown.Item>
              </NavDropdown>
              <p> | </p>
              <NavDropdown title="Language : English" id="collasible-nav-dropdown"  style={{color:"#717669"}}>
                <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">لشکری</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Form>

        </Navbar>

  </>
    );
  }
}

export default HeadNav;
