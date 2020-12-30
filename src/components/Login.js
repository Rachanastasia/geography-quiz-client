import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const login = gql`
  query PostLogin {
    login(email: "${email}", password: "${password}"){
      name,
      email,
      authToken,
      message
    }
  }
`


    return;
  }

  return (
    <section>
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <label htmlFor='login-email'>Email</label>
          <input
            value={email}
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            id='login-email'
            name='login-email' />
        </fieldset>
        <fieldset>
          <label htmlFor='login-password'>Password</label>
          <input
            value={password}
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            id='login-password'
            name='login-password' />
        </fieldset>
        <div className='submit-button-wrapper'>
          <button type='submit'>Login</button>
          <Link to='/register'>
            <span>Register for an account</span>
          </Link>
        </div>
      </form>
    </section>
  )
}

export default Login;
