import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Home from './components/Index';
import Login from '../coreui/src/views/pages/login/Login';
import Register from '../coreui/src/views/pages/register/Register';
import NotFound from '../coreui/src/views/pages/page404/Page404';
// User is LoggedIn
//import PrivateRoute from './PrivateRoute'
import Dashboard from '../coreui/src/App';
const Main = props => (
<Switch>
  {/*User might LogIn*/}
  <Route exact path='/' component={Home}/>
  {/*User will LogIn*/}
  <Route path='/login' component={Login}/>
  <Route path='/register' component={Register}/>
  {/* User is LoggedIn*/}
  <Route path='/dashboard' component={Dashboard}/>
  {/*Page Not Found*/}
  <Route component={NotFound}/>
</Switch>
);
export default Main;