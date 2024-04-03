import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { Nav } from 'reactstrap'

const Header = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav (!nav)
  return (
    // navbar
    <div className='fixed w-full h-[80px] z-auto flex justify-between items-center m-0 px-4 bg-[#0a197b] opacity-70 text-gray-300 '>
        {/* logo  */}
        <div>
            {/* <img src={} /> */}
        </div>
        
        {/* menu */}
        <ul className='hidden md:flex '>
            <li><NavLink to='/' className="navLink">Home</NavLink></li>
            <li><NavLink to='/catindex' className="navLink">About</NavLink></li>
            <li><NavLink to='/catnew' className="navLink">Add</NavLink></li>
        </ul>

        {/* Hamberger menu */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><NavLink  onClick={handleClick} to='/'>Home</NavLink></li>
            <li className='py-6 text-4xl'><NavLink  onClick={handleClick} to='/catindex'>About</NavLink></li>
            <li className='py-6 text-4xl'><NavLink  onClick={handleClick} to='/catnew'>Add</NavLink></li>
        </ul>

    </div>
  )
}

export default Header
