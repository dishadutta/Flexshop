// import React from 'react';
// import logo from './logo.svg';
// import './App.scss';
//
// function App() {
//   return (
//     <div className="App">
//       <h1>hello</h1>
//     </div>
//   );
// }
//
// export default App;

import React from 'react';
import logo from './logo.svg';
import './App.scss';
import HeadNav from './HeadNav';
import Details from './Details';
import Category from './Category';
import Products from './Products';
import Brands from './Brands';
import Contact from './Contact';
import More from './More';
import CopyRight from './CopyRight';

const App = () => (
  <div>
    <HeadNav />
    <div className="gap"></div>
    <Details />
    <hr/>
    <Category style={{marginTop: "0px"}} />
    <hr/>
    <Products/>
    <div className="gap"></div>
    <Brands />
    <div className="gap"></div>
    <hr style={{border: "1px solid #D5CCC4"}}/>
    <div className="gap"></div>
    <Contact/>
    <div className="gap"></div>
    <More />
    <CopyRight />
  </div>
);

export default App;
