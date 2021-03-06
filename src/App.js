import React from 'react';
import {Route , Switch, Redirect} from 'react-router-dom';
import  {AuthPage} from './containers/Auth/index';
import {BookShelf} from './containers/BookShelf/index'
import './App.scss';
import { useSelector } from 'react-redux';
import { Layout } from './components/Layout/index';
import { MemberDetails } from './containers/Member/index';
import {LogOut} from './containers/Auth/Logout/index';

function App() {
  const authenticated = useSelector(state => state.auth.authenticated)
  let routes = ( <Switch>
    <Route path='/' exact component={AuthPage} /> 
    <Redirect to='/'/>   
    </Switch>
    );
  if(authenticated)
  {
  routes = ( <Layout><Switch>
      <Route path='/member'  component={MemberDetails} />
      <Route path='/logout' exact component={LogOut} />
      <Route path='/'  component={BookShelf} /> 
      </Switch></Layout>
      )
    }
 
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
