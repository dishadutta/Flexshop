import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import ProductList from './ProductList';
import ProductFilter from './ProductFilter';

class Products extends Component {
  render() {
    return (
      <div style={{marginLeft: "200px", marginRight: "200px"}}>

        <div class="row">

          <div class="col-3">
            <ProductFilter/>
          </div>

          <div class="col-9">
            <ProductList />
          </div>

        </div>
      </div>
    );
  }
}

export default Products;
