import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

function SignUp({ setCurrentUser }) {

  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username : username,
        password : password,
        email : email,
        password_confirmation: passwordConfirmation
      })
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
    <div className="login" >

      <form onSubmit={handleSubmit}>

        <h1 className="loginHeader">Sign Up</h1>

        <p>
          <label className='label'>
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
          <label className='label'>
            Email
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputField"
          />
        </p>

        <p>
          <label className='label'>
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

        <p>
          <label className='label'>
            Password Confirmation
          </label>
          <input
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className="inputField"
          />
        </p>

        <p><button className="loginButton" type="submit">Sign Up</button></p>

        <p className="text-center">-- or --</p>

        <p className="text-center"><Link className="loginButton" to="/api/login">Log In</Link></p>

      </form>

    </div>
  );
}

export default SignUp;