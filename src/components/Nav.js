import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'

const Nav = () => {
  return (
    <nav>
      <div>
        <NavLink activeclassname='active' className='nav-link' to={'/'}>Home</NavLink>
      </div>
      <div>
        <NavLink activeclassname='active' className=' nav-link' to={'/about'}>About</NavLink>
        <NavLink activeclassname='active' className='nav-link' to={'/blogs'}>Blogs</NavLink>
      </div>
    </nav>
  )
}

export default Nav