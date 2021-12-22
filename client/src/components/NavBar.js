import React from "react"
import { NavLink } from "react-router-dom"

function NavBar(props) {
  return (
    <div>
      <h1 className="appName">SeliT!</h1>
      <nav className="navBar">
        <NavLink className="home" to="/">Home</NavLink>
        <NavLink className="about"to="/about">About</NavLink>
        <NavLink className="productPost"to="/productpost">SeliT</NavLink>
      </nav>
    </div>
  )
}

export default NavBar
