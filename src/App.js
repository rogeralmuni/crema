// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Home from './home';
import MerchantDashboardPage from './MerchantDashboardPage';
import UserRegistrationPage from './UserRegistrationPage';
import ProductListPage from './ProductListPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/merchant-dashboard"
            component={MerchantDashboardPage}
          />
          <Route
            path="/user-registration"
            component={UserRegistrationPage}
          />
          <Route path="/product-list" component={ProductListPage} />
          {/* Add more routes for other pages */}
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
