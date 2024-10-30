import React from 'react'
import './Navbar.css'
import logo from '../../assets/Sanjeev.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={logo} alt="" />
        <ul className="nav-menu">
            <li>Home</li>
            <li>About me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect with me</div>
    </div>
  )
}

export default Navbar