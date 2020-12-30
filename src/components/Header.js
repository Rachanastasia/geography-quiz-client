import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Geography GAME</h1>
      <Link className='button' to='/login'>Login</Link>
    </header>
  )
}

export default Header
