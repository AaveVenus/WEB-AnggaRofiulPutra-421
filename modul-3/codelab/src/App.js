import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function codelab() {
  return (
    <Router>
      <div className="codelab">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Hero />
        <Footer />
      </div>
    </Router>
  );
}

export default codelab;
