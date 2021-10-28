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

    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
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
    <div >

      <form onSubmit={handleSubmit}>

        <h1>Sign Up</h1>

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
            Email
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        <p>
          <label>
            Password Confirmation
          </label>
          <input
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className="w-full p-2 border"
          />
        </p>

        <p><button className="w-full bg-green-500 py-2 mt-4" type="submit">Sign Up</button></p>

        <p className="text-center">-- or --</p>

        <p className="text-center"><Link className="py-4 px-6" to="/login">Log In</Link></p>

      </form>

    </div>
  );
}

export default SignUp;