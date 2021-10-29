import './App.css';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Auth from './Auth';
import UnAuth from './UnAuth';

function App() {

    const [currentUser, setCurrentUser] = useState(null);
    const [authChecked, setAuthChecked] = useState(false);
    const [userBooks, setUserBooks] = useState([]);


    useEffect(() => {
      fetch('/api/me', {
        credentials: 'include'
      })
        .then(res => {
          if (res.ok) {
            res.json().then((user) => {
              setCurrentUser(user)
              setUserBooks(user.books)
              setAuthChecked(true)
            })
          } else {
            setAuthChecked(true)
          }
        })
    }, [setCurrentUser])

  if(!authChecked) { return <div>UGH</div>}

  return (
    <div className="App">
      <Router>
      {currentUser ? (
          <Auth
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            userBooks={userBooks}
            setUserBooks={setUserBooks}
          />
        ) : (
          <UnAuth
            setCurrentUser={setCurrentUser}
          />
        )
      }
      </Router>
    </div>
  );
}

export default App;