import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import UnderCun from './components/pages/UnderCun';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/(about|contact|sign-up|faq|partners|log-in)/' component={UnderCun} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
