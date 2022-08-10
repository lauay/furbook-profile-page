import React, { Component } from 'react';
import PetNav from './components/pet-nav';
import PictureBox from './components/picture-box';
import AboutMe from './components/about-box';
import Posts from './components/posts';
import Footer from './components/footer';
import './App.css';

const App = () => {
  const component = new React.Component()

  component.render = () => {
    return(
      <div className="App">
        <PetNav/>
        <div className="container">
            <div className="row">
            <PictureBox/>
            <AboutMe/>
            </div>
          </div>
          <div className="row">
             
          </div>
          <div class="row">
            <Posts/>
          </div>
          <div class="row">
              <Footer/>
            </div>
        </div>
    )
  }

  return component
}

export default App;