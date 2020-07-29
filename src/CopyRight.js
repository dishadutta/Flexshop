import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Nav } from 'react-bootstrap';

class CopyRight extends Component {
  render() {
    return (
      <div style={{backgroundColor: "#454141"}}>
      <Nav style={{marginLeft: "200px"}}>
      <span className="footerst" style={{color: "#FFFFFF"}}>Copyright © 2016 Postheme. All Rights Reserved</span>
      <span className="footerst" style={{marginLeft: "500px", color: "#A49595"}}>About Us | Customer Serices | Terms & Conditions </span>
      </Nav>

      </div>
    );
  }
}

export default CopyRight;
