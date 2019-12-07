import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Provinces from './components/Provinces/Provinces'
import Footer from './components/Footer/Footer'
import Regions from './components/Regions/Regions'
import Page from './components/Page/Page'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
        <Header />
        <div className='App-Elements'>
          <Switch>
            <Route path='/Provinces' component={Provinces}/>
            <Route path='/Regions' component={Regions}/>
            <Route path='/Page' component={Page} />
          </Switch>
        </div>
        <Footer />
    </Router>
    </div>
  );
}

export default App;