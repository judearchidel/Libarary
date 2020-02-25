import React from 'react';
import {Route , Switch} from 'react-router-dom';
import  {AuthPage} from './containers/Auth/index';
import {bookShelf} from './containers/BookShelf/index'
import './App.scss';
import { useSelector } from 'react-redux';

function App() {
  const authenticated = useSelector(state => state.auth.authenticated)
  
  let routes = ( <Switch>
    <Route path='/' exact component={AuthPage} />    
    </Switch>
    );
  if(authenticated)
  {
  routes = ( <Switch>
      <Route path='/' exact component={bookShelf} />    
      </Switch>
      )
    }
 
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
