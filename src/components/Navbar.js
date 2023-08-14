import React from 'react'
import logo from './logo1.jpg';
export default function Navbar() {
  return (
    <div className='navbar'>
      <img  className="logo-img" src={logo} alt="logo image" />
        <ul className='nav-ul nav-right'>
          <li>SignUp</li>
          <li>Login</li>
        </ul>
    
    </div>
  )
}
