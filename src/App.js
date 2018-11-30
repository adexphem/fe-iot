import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from './context'

// importing components
import Index from './components/Index'
import About from './components/About'

// importing commons
import Nav from './components/common/NavBar'
import Footer from './components/common/Footer'

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <React.Fragment>
            <Nav />
            <div className='container'>
              <Switch>
                  <Route exact path="/" component={Index} />
                  <Route exact path="/about" component={About} />
                  <Route component={Index} />
              </Switch>
            </div>
            <Footer />
        </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
