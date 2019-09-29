import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/page" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>

    </React.Fragment>
  );
}

export default App;
