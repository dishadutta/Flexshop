import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button, Navbar, Nav, FormControl, Form, NavDropdown, Carousel } from 'react-bootstrap';
import laptop from './images/laptop.PNG';
import ad from './images/ad.PNG';
import slide1 from './images/slide1.PNG';
import slide2 from './images/slide2.PNG';
import slide3 from './images/slide3.PNG';

class Products extends Component {
  render() {
    return (
      <div>

      <h4>• Product Filters</h4>
      <hr/>
      <div style={{border: "1px solid #DAD9D8", paddingLeft: "20px"}}>
        <ul style={{paddingTop: "20px"}} className="ulbold">Price</ul>
        <hr/>
        <ul className="ulbold">Range: 15,00€ - 50,00€</ul>
        <input type="range" min="1" max="100" value="100" class="slider" style={{paddingLeft: "100px"}}/>
        <ul className="ulbold">Size</ul>
        <hr/>
        <input type="checkbox" name="fruit" value="Apple"/> S (13)<br/>
        <input type="checkbox" name="fruit" value="Orange"/> M (13)<br/>
        <input type="checkbox" name="fruit" value="Banana"/> L (13)
        <div className="gap1"></div>
        <ul className="ulbold">Compositions</ul>
        <hr/>
        <input type="checkbox" name="fruit" value="Apple"/> Cotton(9)<br/>
        <input type="checkbox" name="fruit" value="Orange"/> Polyster(2)<br/>
        <input type="checkbox" name="fruit" value="Banana"/> Viscose(2)
        <div className="gap1"></div>
        <ul className="ulbold">Styles</ul>
        <hr/>
        <input type="checkbox" name="fruit" value="Apple"/> Casual(9)<br/>
        <input type="checkbox" name="fruit" value="Orange"/> Dressy(1)<br/>
        <input type="checkbox" name="fruit" value="Banana"/> Girly(3)
        <div className="gap"></div>
      </div>

      <div className="gap"></div>
      <img src={ad} style={{height: "140px"}} />


      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>



      </div>
    );
  }
}

export default Products;
