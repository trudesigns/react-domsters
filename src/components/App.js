import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Live from './Live';
import Photos from './Photos';
import './../css/basic.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
       <Navbar/>
       <About/>
       <Photos/>
       <Live/>
       <Contact/>
        
        </div>
    );
  }
}

export default App;
