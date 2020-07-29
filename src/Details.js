import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button, Navbar, Nav, FormControl, Form, NavDropdown } from 'react-bootstrap';

class Details extends Component {
  render() {
    return (
      <div style={{marginLeft: "200px"}}>
        <i class="fas fa-shopping-cart fa-3x" style={{color:"#1781C8"}}></i><span className="shopst">FLEX</span><span className="shopst" style={{color:"#1781C8"}}>SHOP</span>
        <span className="play" style={{marginLeft:"100px"}}><i class="fas fa-user icon1"></i>My Account  |  </span>
        <span className="play"><i class="fas fa-key icon1"></i>Signin  |  </span>
        <span className="play"><i class="fas fa-heart icon1"></i>Wishlist  |  </span>
        <span className="play"><i class="fas fa-signal icon1"></i>Compare</span>
        <i class="fas fa-phone-alt logos fa-2x" style={{color:"#C3164A", marginLeft:"200px"}}></i>
        <span style={{color:"#C3164A"}}>CALL US</span>

      </div>
    );
  }
}

export default Details;
