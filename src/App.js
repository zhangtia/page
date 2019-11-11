import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar, FooterPage } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
//import { Footer } from './components/Footer';



function App() {
  return (
  
    <React.Fragment>
      <NavigationBar />
      <Jumbotron />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
        </Layout>
      <FooterPage />
    </React.Fragment>

  );
}

export default App;
