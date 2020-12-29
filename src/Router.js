import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';


function Router() {
  return (
    <Switch>
      <Route path='/' exact component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </Switch>
  )
}

export default Router;
