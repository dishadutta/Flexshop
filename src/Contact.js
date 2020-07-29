import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button, Navbar, Nav, FormControl, Form, NavDropdown } from 'react-bootstrap';
import card from './images/card.PNG';

class Contact extends Component {
  render() {
    return (
      <div style={{marginLeft: "200px", marginRight: "200px"}}>
        <div className="row">

          <div className="col-3">

            <i class="fas fa-shopping-cart fa-3x" style={{color:"#1781C8"}}></i>
            <span className="shopst">FLEX</span><span className="shopst" style={{color:"#1781C8"}}>SHOP</span>
            <br/><div className="gap"></div>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <br/>
            <div className="gap"/>
            <Button variant="outline-light" className="myCarttd" style={{paddingLeft: "12px", paddingRight: "12px"}}>Show Google Maps</Button>

          </div>

          <div className="col-3">

            <ul className="contactd">INFORMATION</ul>
              <li>Specials</li>
              <li>New products</li>
              <li>Best sellers</li>
              <li>Our stores</li>
              <li>Legal Notice</li>

          </div>

          <div className="col-3">

          <ul className="contactd">MY ACCOUNT</ul>
            <li>My orders</li>
            <li>My credit slips</li>
            <li>My addresses</li>
            <li>Our stores</li>
            <li>My personal info</li>

          </div>

          <div className="col-3">

          <ul className="contactd">STORE INFORMATION</ul>
          <ul className="contactt"><i class="fas fa-map-marker-alt"></i> My Company, 42 Puffin street 12345</ul>
          <ul className="contactt">Puffinville France</ul>
          <ul className="contactt"><i class="fas fa-phone-alt"></i> Call us now: 0123-456-789</ul>
          <ul className="contactt"><i class="far fa-envelope"></i> Email: sales@yourcompany.com</ul>
          <ul className="contactt"><img src={card}/></ul>

          </div>

        </div>
      </div>
    );
  }
}

export default Contact;
