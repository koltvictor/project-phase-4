import React, { useState } from 'react'
import { Redirect, useHistory, Link } from 'react-router-dom'

function LogIn({ setCurrentUser }) {

  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            history.push('/books')
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  };

  return (
    <div className="login">

      <Redirect to="/" />

      <form onSubmit={handleSubmit}>
        
        <h1 className="loginHeader">Log In</h1>
        <div className="loginForm">
        <p>
          <label className="label">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="inputField"
          />
        </p>

        <p>
          <label className="label">          
            Password
          </label>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputField"
          />
        </p>
        <p><button className="loginButton" type="submit">Log In</button></p>
        <p className="text-center">-- or --</p>

        <p className="text-center"><Link className="loginButton" to="/signup">Sign Up</Link></p>
        </div>
        

      </form>

    </div>
  );
}

export default LogIn;

