import React from 'react';
import './App.css';
import Intro from './components/Intro/intro';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
