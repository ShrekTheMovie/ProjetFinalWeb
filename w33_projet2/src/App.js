import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Provinces from './components/Provinces/Provinces'
import Footer from './components/Footer/Footer'
import Regions from './components/Regions/Regions'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
        <Header />
        <Switch>
          <Route path='Provinces' component={Provinces}/>
          <Route path='Regions' component={Regions}/>
        </Switch>
        <Footer />
    </Router>
    </div>
  );
}

export default App;