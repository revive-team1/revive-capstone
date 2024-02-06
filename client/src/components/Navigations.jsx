import React from 'react'
import { Link } from "react-router-dom";

const Navigations = () => {

  return (
    <header id='navbar'>

      <div id="navbarItems">

        <Link to="/">home</Link>
        <Link to="/exercises">fitness</Link>
        <Link to="/selfcare">self care</Link>
        <Link to="/recipes">food</Link>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
        <Link to="/account">my account</Link>
        <Link to="/favorite-exercises">favorite exercises</Link>
        <Link to="/favorite-recipes">favorite recipes</Link>

      </div>
    </header>
  )
}

export default Navigations