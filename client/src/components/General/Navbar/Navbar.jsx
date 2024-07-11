import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div>
        <h2>payGifty</h2>
      </div>
      <div className='--Navbar-content'>
        <h3>Home</h3>
        <h3>Contact Us</h3>
        <h3>About</h3>
      </div>
      <div className='--Navbar-button'>
        <button>Sign Up</button>
        <button>Log In</button>
      </div>
    </div>
  )
}

export default Navbar