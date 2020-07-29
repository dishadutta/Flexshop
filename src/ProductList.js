import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button, Navbar, Nav, FormControl, Form, NavDropdown, Dropdown, CardGroup, Card } from 'react-bootstrap';
import laptop from './images/laptop.PNG';
import car from './images/car.PNG';
import cardboard from './images/cardboard.PNG';
import cycle from './images/cycle.PNG';
import drum from './images/drum.PNG';
import headphone from './images/headphone.PNG';
import helicopter from './images/helicopter.PNG';
import house from './images/house.PNG';
import mf from './images/mf.PNG';
import mobile from './images/mobile.PNG';

class Products extends Component {
  render() {
    return (
      <div >

        <span style={{paddingRight:"20px"}}><i class="fas fa-arrow-circle-right"></i>Home</span>
        <span><i class="fas fa-arrow-circle-right"></i>Mobile</span>
        <hr/>
        <img src={laptop} style={{width: "900px"}}/>
        <div  style={{marginTop: "20px"}}/>
        <span>Sort by
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="mycategory1" style={{marginLeft: "10px", marginRight: "100px"}}>
            --
          </Dropdown.Toggle>
        </span>
        <span>Show
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="mycategory1" style={{padding: "0px", marginLeft: "10px", marginRight: "10px"}}>
            9
          </Dropdown.Toggle>
        </span>
        <span>per page  _______________________________________ View: <i class="fas fa-th-large" style={{marginRight: "10px", marginLeft: "10px"}}></i><i class="fas fa-list"></i></span>

        <div className="gap"></div>


        <CardGroup>
          <Card className="high">
            <Card.Img variant="top" src={car} />
            <Card.Body>
              <Card.Title>LHR V71 Advance Portable FHD 1080p Car Camcorder</Card.Title>
              <Card.Text>
                <i class="fas fa-star" style={{color:"orange"}}></i>
                <i class="fas fa-star" style={{color:"orange"}}></i>
                <i class="fas fa-star" style={{color:"orange"}}></i>
                <i class="fas fa-star" style={{color:"orange"}}></i>
                <i class="fas fa-star" style={{color:"grey"}}></i>
                <br/>15,57 €
              </Card.Text>
            </Card.Body>
            <Button variant="outline-light" className="myCart"><i class="fas fa-cart-arrow-down"></i> Add to cart</Button>
          </Card>
          <Card className="high">
            <Card.Img variant="top" src={cardboard} />
            <Card.Body>
              <Card.Title>VR BOX Google Cardboard Virtual Reality</Card.Title>
              <Card.Text>
              <i class="fas fa-star" style={{color:"orange"}}></i>
              <i class="fas fa-star" style={{color:"orange"}}></i>
              <i class="fas fa-star" style={{color:"orange"}}></i>
              <i class="fas fa-star" style={{color:"grey"}}></i>
              <i class="fas fa-star" style={{color:"grey"}}></i>
              <br/><strike>28,77 €</strike> <br/> 26,18 €
              </Card.Text>
            </Card.Body>
            <Button variant="outline-light" className="myCart"><i class="fas fa-cart-arrow-down"></i> Add to cart</Button>
          </Card>
          <Card className="high">
            <Card.Img variant="top" src={cycle} />
            <Card.Body>
              <Card.Title>Nikon D5300 24.2MP with 18-55mm VR II Lens</Card.Title>
              <Card.Text>
              <i class="fas fa-star" style={{color:"orange"}}></i>
              <i class="fas fa-star" style={{color:"orange"}}></i>
              <i class="fas fa-star" style={{color:"orange"}}></i>
              <i class="fas fa-star" style={{color:"orange"}}></i>
              <i class="fas fa-star" style={{color:"grey"}}></i>
              <br/>24,52 €
              </Card.Text>
            </Card.Body>
            <Button variant="outline-light" className="myCart"><i class="fas fa-cart-arrow-down"></i> Add to cart</Button>
          </Card>
        </CardGroup>


        <div className="gap"></div>

        <CardGroup>
          <Card className="high">
            <Card.Img variant="top" src={drum} />
            <Card.Body>
              <Card.Title>Ace 39" Super Slim LED Smart TV LED-707 ES1B</Card.Title>
              <Card.Text>
                <i class="fas fa-star" style={{color:"orange"}}></i>
                <i class="fas fa-star" style={{color:"orange"}}></i>
                <i class="fas fa-star" style={{color:"orange"}}></i>
                <i class="fas fa-star" style={{color:"orange"}}></i>
                <i class="fas fa-star" style={{color:"orange"}}></i>
                <br/>48,09 €
              </Card.Text>
            </Card.Body>
            <Button variant="outline-light" className="myCart"><i class="fas fa-cart-arrow-down"></i> Add to cart</Button>
          </Card>
          <Card className="high">
            <Card.Img variant="top" src={headphone} />
            <Card.Body>
              <Card.Title>8803-3 in 1 Sports Bluetooth Over the Ear Headphones</Card.Title>
              <Card.Text>
              <i class="fas fa-star" style={{color:"orange"}}></i>
              <i class="fas fa-star" style={{color:"orange"}}></i>
              <i class="fas fa-star" style={{color:"grey"}}></i>
              <i class="fas fa-star" style={{color:"grey"}}></i>
              <i class="fas fa-star" style={{color:"grey"}}></i>
              <br/><strike>25,46 €</strike> <br/> 21,64 €
              </Card.Text>
            </Card.Body>
            <Button variant="outline-light" className="myCart"><i class="fas fa-cart-arrow-down"></i> Add to cart</Button>
          </Card>
          <Card className="high">
            <Card.Img variant="top" src={helicopter} />
            <Card.Body>
              <Card.Title>8803-3 in 1 Sports Bluetooth Over the Ear Headphones</Card.Title>
              <Card.Text>
              <i class="fas fa-star" style={{color:"orange"}}></i>
              <i class="fas fa-star" style={{color:"orange"}}></i>
              <i class="fas fa-star" style={{color:"orange"}}></i>
              <i class="fas fa-star" style={{color:"grey"}}></i>
              <i class="fas fa-star" style={{color:"grey"}}></i>
              <br/><strike>25,46 €</strike> <br/> 21,64 €
              </Card.Text>
            </Card.Body>
            <Button variant="outline-light" className="myCart"><i class="fas fa-cart-arrow-down"></i> Add to cart</Button>
          </Card>
        </CardGroup>

        <div className="gap"></div>

        <CardGroup>
          <Card className="high">
            <Card.Img variant="top" src={mobile} />
            <Card.Body>
              <Card.Title>Creative SBS-A120 Multimedia Speakers</Card.Title>
              <Card.Text>
                <i class="fas fa-star" style={{color:"orange"}}></i>
                <i class="fas fa-star" style={{color:"orange"}}></i>
                <i class="fas fa-star" style={{color:"orange"}}></i>
                <i class="fas fa-star" style={{color:"orange"}}></i>
                <i class="fas fa-star" style={{color:"grey"}}></i>
                <br/>28,77 €
              </Card.Text>
            </Card.Body>
            <Button variant="outline-light" className="myCart"><i class="fas fa-cart-arrow-down"></i> Add to cart</Button>
          </Card>
          <Card className="high">
            <Card.Img variant="top" src={mf} />
            <Card.Body>
              <Card.Title>Xtreme 32" LED TV Black MF-3200</Card.Title>
              <Card.Text>
              <i class="fas fa-star" style={{color:"orange"}}></i>
              <i class="fas fa-star" style={{color:"orange"}}></i>
              <i class="fas fa-star" style={{color:"grey"}}></i>
              <i class="fas fa-star" style={{color:"grey"}}></i>
              <i class="fas fa-star" style={{color:"grey"}}></i>
              <br/><strike>19,33 €</strike> <br/> 17,59 €
              </Card.Text>
            </Card.Body>
            <Button variant="outline-light" className="myCart"><i class="fas fa-cart-arrow-down"></i> Add to cart</Button>
          </Card>
          <Card className="high">
            <Card.Img variant="top" src={house} />
            <Card.Body>
              <Card.Title>8803-3 in 1 Sports Bluetooth Over the Ear Headphones</Card.Title>
              <Card.Text>
              <i class="fas fa-star" style={{color:"orange"}}></i>
              <i class="fas fa-star" style={{color:"orange"}}></i>
              <i class="fas fa-star" style={{color:"orange"}}></i>
              <i class="fas fa-star" style={{color:"orange"}}></i>
              <i class="fas fa-star" style={{color:"grey"}}></i>
              <br/><strike>25,46 €</strike> <br/> 21,64 €
              </Card.Text>
            </Card.Body>
            <Button variant="outline-light" className="myCart"><i class="fas fa-cart-arrow-down"></i> Add to cart</Button>
          </Card>
        </CardGroup>

        <hr />

        <span style={{fontFamily: "Lucida Console", marginRight:"80px", fontSize: "small"}}>Showing 1 - 9 of 13 items</span>
        <Button variant="outline-light" className="myCart" style={{paddingLeft: "10px", paddingRight: "10px",marginRight:"20px"}}>Previous</Button>
        <Button variant="outline-light" className="myCart" style={{paddingLeft: "12px", paddingRight: "12px", marginRight:"20px"}}>1</Button>
        <Button variant="outline-light" className="myCart" style={{paddingLeft: "12px", paddingRight: "12px", marginRight:"20px"}}>2</Button>
        <Button variant="outline-light" className="myCart" style={{paddingLeft: "15px", paddingRight: "15px", marginRight:"40px"}}>Next</Button>
        <Button variant="outline-light" className="myCart" style={{paddingLeft: "10px", paddingRight: "10px", marginRight:"40px"}}>Show all</Button>
        <Button variant="outline-light" className="myCart" style={{paddingLeft: "5px", paddingRight: "5px"}}>Compare(0)</Button>

      </div>
    );
  }
}

export default Products;
