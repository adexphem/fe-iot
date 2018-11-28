import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import { Provider } from './context';
import Dash from './components/Dash';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Dash} />
          <Route exact path="/about" component={About} />
          <Route component={Dash} />
        </Switch>
      </Router>
    );
  }
}

export default App;
