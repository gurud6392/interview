import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from './components/loader';
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
