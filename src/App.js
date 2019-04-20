import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {ParallaxProvider} from 'react-scroll-parallax';
import logo from './logo.svg';
import './App.css';

class AppContainer extends Component {
  render() {
    return (
      const ParallaxImage =() => (
        <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <Image src="/image.jpg"/>
        </Parallax>);
      <div className="AppContainer">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>

          <body
          font= "Roboto">
        "You Whats up This should show font Roboto?"
        </body>
        </header>

      </div>
    );
  }
}

export default AppContainer;
