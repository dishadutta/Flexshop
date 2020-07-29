import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import {Nav, Form, FormControl, Button} from 'react-bootstrap';

class More extends Component {
  render() {
    return (
      <div style={{backgroundColor: "#2E2A28", color:"#FFFFFF"}}>
        <Nav>
          <div style={{marginLeft: "200px"}} />
          <span style={{color:"#4160CF"}} className="gap-2"><i class="fab fa-facebook fa-2x"></i></span>
          <span style={{color:"#7E94E5"}} className="gap-2"><i class="fab fa-twitter-square fa-2x"></i></span>
          <span style={{color:"#E13F3F"}} className="gap-2"><i class="fab fa-telegram fa-2x"></i></span>
          <span style={{color:"#E52C2C"}} className="gap-2"><i class="fab fa-google-plus fa-2x"></i></span>

          <span className="gap-2" style={{marginLeft:"200px"}}><i class="far fa-envelope-open fa-3x"></i></span>
          <span className="gap-2">SIGN UP FOR OUR NEWSLETTER<br style={{fontSize: "small", color: "#D8CBCB"}}/>Get the latest deals and special offers</span>

          <Form inline className="buttonIn" style={{marginLeft:"200px"}}>
            <FormControl type="text" placeholder="Enter your e-mail" className="mr-sm-2"/>
            <Button variant="outline-success" className="signup">Sign Up</Button>
          </Form>
        </Nav>
      </div>
    );
  }
}

export default More;
