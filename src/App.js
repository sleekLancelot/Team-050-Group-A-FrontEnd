import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import UnderCun from './components/pages/UnderCun';
import Navbar from './components/layout/Navbar';
import LorR from './components/pages/LorR';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path='/' children={<Home />} />
          <Route path='/login-register' children={<LorR />} />
          <Route path='/(how-it-works|contact|about)/' component={UnderCun} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
