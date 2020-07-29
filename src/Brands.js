import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button, Navbar, Nav, FormControl, Form, NavDropdown, Carousel } from 'react-bootstrap';
import brand1 from './images/brand1.PNG';
import brand2 from './images/brand2.PNG';

class Brands extends Component {
  render() {
    return (
      <div style={{marginLeft: "200px", marginRight: "200px"}}>
        <span className="brands">• Brand & Clients _____________________________________________________________________________________ </span>
        <Button variant="outline-light" className="myCart" style={{paddingLeft: "12px", paddingRight: "12px"}}>←</Button>
        <Button variant="outline-light" className="myCart" style={{paddingLeft: "12px", paddingRight: "12px"}}>→</Button>
        <div className="gap" />

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={brand1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={brand2}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

      </div>
    );
  }
}

export default Brands;
