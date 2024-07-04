// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import AuthForm from './components/AuthForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={AuthForm} />
          <Route exact path="/register" component={AuthForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
