import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <section>
      <form onSubmit={() => { }}>
        <fieldset>
          <label htmlFor='register-name'>Name</label>
          <input id='register-name' name='register-name' placeholder='Your name' />
        </fieldset>
        <fieldset>
          <label htmlFor='register-email'>Email</label>
          <input id='register-email' name='register-email' placeholder='test@test.com' />
        </fieldset>
        <fieldset>
          <label htmlFor='register-password'>Password</label>
          <input id='register-password' name='register-password' placeholder='test-password!' />
        </fieldset>
        <fieldset>
          <label htmlFor='register-repeat-password'>Repeat password</label>
          <input id='register-repeat-password' name='register-repeat-password' placeholder='test-password!' />
        </fieldset>
        <div className='submit-button-wrapper'>
          <button type='submit'>Sign Up</button>
          <Link to='/login'>
            <span>Already have an account?</span>
          </Link>
        </div>
      </form>
    </section>
  )
}

export default Register;
