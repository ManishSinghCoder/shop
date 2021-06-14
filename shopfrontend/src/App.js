import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { useEffect } from 'react';
import login from './Component/Login';
import Shopauthview from './Component/Shopauthview';
import Shopcontentcreate from './Component/Shopcontentcreate';
import Shopview from './Component/Shopview'
import Layout from './Container/Layout'
import './Component/background.css'

function App() {
  return (
    <div id="back">
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Shopview} />
          <Route exact path='/Login' component={login} />
          <Route exact path='/Shopadditem' component={Shopcontentcreate} />
          <Route exact path='/ShopIditem' component={Shopauthview} />
        </Switch>
      </Layout>
    </Router>
    </div>

  );
}

export default App;
