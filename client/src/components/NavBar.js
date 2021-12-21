import React from "react"
import { NavLink } from "react-router-dom"

function NavBar(props) {
  return (
    <div>
      <nav className="navBar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/productpost">Product Post</NavLink>
      </nav>
    </div>
  )
}

export default NavBar
