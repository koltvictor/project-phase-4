// import React from 'react';

// function Signup({ newUser, setNewUser, handleSubmit }) {

//     //once data is sent to parent (unauth), if the response of posting new user is .ok, then on parent we will push the user to the home page = authenticatedapp
    
//     const {username, name, password, password_confirmation, email} = newUser

//     return (
//         <div> 

//             <h2>Create An Account</h2>

//             <form id='newAccountForm' onSubmit={e => handleSubmit(e)}>

//                 <input type='text'
//                     className='formText'
//                     placeholder='Name'
//                     name='name'
//                     value={name}
//                     onChange={e => setNewUser({...newUser, [e.target.name]: e.target.value})} />

//                 <input type='text'
//                     className='formText'
//                     placeholder='Username'
//                     name='username'
//                     value={username}
//                     onChange={e => setNewUser({...newUser, [e.target.name]: e.target.value})} />

//                 <input type='text'
//                     className='formText'
//                     placeholder='Email'
//                     name='email'
//                     value={email}
//                     onChange={e => setNewUser({...newUser, [e.target.name]: e.target.value})} />

//                 <input type='text'
//                     className='formText'
//                     placeholder='Password'
//                     name='password'
//                     value={password}
//                     onChange={e => setNewUser({...newUser, [e.target.name]: e.target.value})} />

//                 <input type='text'
//                     className='formText'
//                     placeholder='Confirm Password'
//                     name='password_confirmation'
//                     value={password_confirmation}
//                     onChange={e => setNewUser({...newUser, [e.target.name]: e.target.value})} />

//                 <input type='submit'
//                        value='Create Account' />

//             </form>

//         </div>
//     );
// }

// export default Signup;
//////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
function SignUp({ setCurrentUser }) {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
//   const handleSubmit = (event) => {
//     event.preventDefault()
//     fetch('/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         username,
//         password,
//         password_confirmation: passwordConfirmation
//       })
//     })
//       .then(res => {
//         if (res.ok) {
//           res.json().then(user => {
//             setCurrentUser(user)
//             history.push('/groups')
//           })
//         } else {
//           res.json().then(errors => {
//             console.error(errors)
//           })
//         }
//       })
//   }
  return (
    <div >
      <form onSubmit={null}>
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
  )
}
export default SignUp;