import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

function UnAuth({ setCurrentUser }) {
  
    return (
      <Switch>
        <Route exact path="/">
          <LogIn setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/signup">
          <SignUp setCurrentUser={setCurrentUser}/>
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  }
  
  export default UnAuth;