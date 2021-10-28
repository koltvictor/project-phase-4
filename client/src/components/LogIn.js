import React, { useState } from 'react'
import { Redirect, useHistory, Link } from 'react-router-dom'

function LogIn({ setCurrentUser }) {

  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://[::1]:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            console.log(user)
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
    <div >

      <Redirect to="/" />

      <form onSubmit={handleSubmit}>

        <h1>Log In</h1>

        <p>
          <label>
            Username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border"
          />
        </p>

        <p>
          <label>          
            Password
          </label>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border"
          />
        </p>

        <p><button className="w-full bg-green-500 py-2 mt-4" type="submit">Log In</button></p>

        <p className="text-center">-- or --</p>

        <p className="text-center"><Link className="py-4 px-6" to="/signup">Sign Up</Link></p>

      </form>

    </div>
  );
}

export default LogIn;