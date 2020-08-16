import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Portfolio from './components/pages/Portfolio';
import PrivacyPolicy from './components/pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Route path="/portfolio" component={Portfolio}/>
      <Route exact path="/privacy" component={PrivacyPolicy}/>
    </Router>
  );
}

export default App;
