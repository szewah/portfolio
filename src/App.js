import React from 'react';
import './App.css';
import Intro from './components/Intro/intro';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import About from './components/About/about';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Intro/>
      <Projects/>
      <About/>
      <Contact/>
    </div>
    </BrowserRouter>
  );
}

export default App;
