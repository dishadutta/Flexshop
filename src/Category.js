import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button, Navbar, Nav, FormControl, Form, NavDropdown, Dropdown,ButtonGroup, ButtonToolbar, InputGroup } from 'react-bootstrap';

class Category extends Component {
  render() {
    return (
      <div style={{marginLeft: "200px"}}>
        <Navbar>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" style={{marginRight: "50px", textAlign: "left"}} className="myButton">
            SHOP BY <br/> Category
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown as={ButtonGroup}>
              <Button variant="success"><i class="fas fa-laptop"></i>Computer & Laptop</Button>
              <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Laptop</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Desktop Computer</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Computer Scanner</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <br/>
            <Dropdown as={ButtonGroup} >
              <Button variant="success" ><i class="fas fa-mobile-alt" ></i>Mobile</Button>
              <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Computer Storage</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Computer Component</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Perfect Study Buddy</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <br/>
            <Dropdown as={ButtonGroup}>
              <Button variant="success"><i class="fas fa-tablet-alt"></i>Tablet</Button>
              <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Laptops</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Printers Ink</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tech Mania</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <br/>
            <Dropdown as={ButtonGroup}>
              <Button variant="success"><i class="fas fa-headphones"></i>Headphone</Button>
              <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">PC Gaming</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Accessories</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Computer & Laptop</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <br/>
            <Button variant="success"><i class="fas fa-camera"></i>Camera & Photo</Button>

            <Dropdown.Item href="#/action-1"><i class="fas fa-plus"></i>MORE CATEGORIES</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>


        <ButtonToolbar style={{marginRight: "50px"}}>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="mycategory">
            Categories
          </Dropdown.Toggle>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Enter your search key"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon2"
              style={{paddingLeft: "200px", paddingRight: "200px", height: "54px"}}
            />
            <InputGroup.Prepend>
              <InputGroup.Text id="btnGroupAddon2"><i class="fas fa-search"></i></InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
        </ButtonToolbar>


        <Dropdown.Toggle variant="success" id="dropdown-basic"  className="mycategory" style={{height: "54px"}}>
          <i class="fas fa-cart-plus fa-1x"></i>Cart: <br/>0,00 €
        </Dropdown.Toggle>
        </Navbar>
      </div>
    );
  }
}

export default Category;
