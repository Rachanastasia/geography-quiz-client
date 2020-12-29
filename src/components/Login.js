import React from 'react';
import { Link } from 'react-router-dom';

function Login() {


  return (
    <section>
      <form onSubmit={() => { }}>
        <fieldset>
          <label htmlFor='login-email'>Email</label>
          <input id='login-email' name='login-email' placeholder='test@test.com' />
        </fieldset>
        <fieldset>
          <label htmlFor='login-password'>Password</label>
          <input id='login-password' name='login-password' placeholder='test@test.com' />
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
