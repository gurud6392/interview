import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './pages/layout';
import Routers from './router';

const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Routers />
        </Layout>
      </Router>
    </div>
  );
}

export default App;