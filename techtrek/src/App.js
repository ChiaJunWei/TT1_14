import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Cart from'./components/Cart';

const App = () => {


  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Navbar/>
          <Route exact path="/cart" component={Cart} />
        
      </div>
    </Router>

  );
}

export default App;
