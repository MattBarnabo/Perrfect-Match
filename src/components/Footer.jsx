import React from 'react'
import { NavLink } from "react-router-dom"
import pmlSmall from "../assets/Logos/pmlsmall.png"

const Footer = () => {
  return (
    <footer>
      <div className='footer-content'>
        <p>&copy; 2024 Seth & Matt</p>
        <NavLink to='/'>
          <img
          src= {pmlSmall}
          alt='logo of cat with heart in a circle'
          className='cat-logo-small'
          />
        </NavLink>
      </div>
    </footer>
  )
}

export default Footer
