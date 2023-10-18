import React from 'react'
import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux';

const Navbar = () => {
  const items =useSelector((state => state.cart))
  return (
    <nav className='navbar'>
      <div className="logo">
        <h3>REDUX TOOLKIT</h3>
      </div>

      <div className='nav-links'>
        <Link className="navlink" to="/">
          Home
        </Link>
        <Link className="navlink" to="/cart">
          Cart
        </Link>
        Cart Items:{items.length}
      </div>
    </nav>
  );
}

export default Navbar