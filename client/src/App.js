import './App.css';

import React, { useState, useEffect } from 'react';

import { Route, Switch } from 'react-router-dom';
import Auth from './Auth';
import UnAuth from './UnAuth';

function App() {
    const [currentUser, setCurrentUser] = useState(null)
    const [authChecked, setAuthChecked] = useState(false)

    useEffect(() => {
      fetch('/me', {
        credentials: 'include'
      })
        .then(res => {
          if (res.ok) {
            res.json().then((user) => {
              setCurrentUser(user)
              setAuthChecked(true)
            })
          } else {
            setAuthChecked(true)
          }
        })
    }, [])

  if(authChecked) { return <div>UGH</div>}

  return (
    <div className="App">
      <Route>
      {currentUser ? (
          <Auth
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
        ) : (
          <UnAuth
            setCurrentUser={setCurrentUser}
          />
        )
      }
      </Route>
    </div>
  );
}
export default App;