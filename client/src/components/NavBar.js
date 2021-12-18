import React from 'react'
import { NavLink} from "react-router-dom"

function NavBar(props) {
  return (
    <div>
      <nav>
        <NavLink className = 'nav' to = "/">Home</NavLink>
        <NavLink className = 'nav' to = "/about">About</NavLink>
        <NavLink className = 'nav' to = "/productpost">Product Post</NavLink>
      </nav>
    </div>
  )
}

export default NavBar
