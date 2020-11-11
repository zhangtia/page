import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar, FooterPage } from './components/NavigationBar';
import { Intro } from './components/Intro';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Project } from './Projects';
//import { Footer } from './components/Footer';



function App() {
  return (
  
    <React.Fragment>
      <NavigationBar />
      <Intro />
      <About />
      <Experience />
      <FooterPage />
    </React.Fragment>

  );
}

export default App;
