import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

function UnAuth({ setCurrentUser }) {
  
    return (
      <div>
        <div className='App-header'>
        <h1>Recycled Reads</h1>
            <h3>"Your community collection of pre-loved books!"</h3>
        </div>
        <Switch>
          <Route exact path="/">
            <LogIn setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/signup">
            <SignUp setCurrentUser={setCurrentUser}/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
  
  export default UnAuth;