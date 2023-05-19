// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import ProductList from './productlist';
import ProductDetails from './ProductDetails';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={ProductList} />
          <Route path="/product/:id" component={ProductDetails} />
          {/* Add more routes for other pages */}
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
