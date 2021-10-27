import './App.css';
import React,{ useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './Auth'
import UnAuth from './UnAuth'
function App() {
    const [currentUser, setCurrentUser] = useState("test")
    const [authChecked, setAuthChecked] = useState(null)
    useEffect(() => {
      fetch('/api/me', {
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
  // if(!authChecked) { return <div></div>}
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