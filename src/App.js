import React from 'react';
import {Route , Switch, Redirect} from 'react-router-dom';
import  AuthPage from './containers/Auth/index';
import './App.css';

function App() {
  
let routes = (
                <Switch>
                <Route path='/' exact component={AuthPage} />   
                </Switch>
                    
)

  
  return (
    <div className="App">
    {routes}
    </div>
  );
}

export default App;
