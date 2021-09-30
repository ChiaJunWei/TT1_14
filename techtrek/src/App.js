import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { commerce } from './lib/commerce';
import './App.css';
import Navbar  from './components/Navbar/Navbar';
import { CssBaseline } from '@material-ui/core';

import { Container } from '@material-ui/core';
import LoginPage from './Screns/LoginPage';

const App = () => {
  const [cart, setCart] = useState({});

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar/>
        <Container style = {{backgroundColor: '#FAF9F7', height: '100vh'}}>
          <Switch>
            <Route path = '/' exact component = {<div>homepage</div>}/>
            <Route path = "/login" exact component = {LoginPage}/>
          </Switch>

        </Container>
        {/* <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} /> */}
        {/* <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
          <Route path="/checkout" exact>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>
        </Switch> */}
      </div>
    </Router>

  );
}

export default App;
