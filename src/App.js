import React from 'react';
import {Route , Switch, Redirect} from 'react-router-dom';
import  {AuthPage} from './containers/Auth/index';
import {bookShelf} from './containers/BookShelf/index'
import './App.scss';
import { useSelector } from 'react-redux';
import { Layout } from './components/Layout/Layout';
import { Bookdetails } from './containers/Books/index';
import { MemberDetails } from './containers/Member/index';

function App() {
  const authenticated = useSelector(state => state.auth.authenticated)
  console.log(authenticated)
  let routes = ( <Switch>
    <Route path='/' component={AuthPage} />    
    </Switch>
    );
  if(authenticated)
  {
  routes = ( <Layout><Switch>
      <Route path='/' exact component={bookShelf} /> 
      <Route path='/books' exact component={Bookdetails} />
      <Route path='/member' exact component={MemberDetails} />
      <Redirect to='/'/>
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
