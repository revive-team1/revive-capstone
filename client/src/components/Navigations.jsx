import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { updateToken } from '../actions/actionsSlice'
import { useDispatch, useSelector } from 'react-redux';

const Navigations = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = useSelector((it) => it.actionsSlice.token)

  const handleLogOut = () => {
  dispatch(updateToken(''))
  navigate('/login')
}

  return (
    <header id='navbar'>

      <div id="navbarItems">

        <Link to="/">home</Link>
        <Link to="/exercises">fitness</Link>
        <Link to="/selfcare">self care</Link>
        <Link to="/recipes">food</Link>
        <div>
        {(!token) ? (
          <>
          <Link to="/login">login</Link>
          <Link to="/register">register</Link>
          </>
        ) : (
          <>
            <Link to="/account">my account</Link>
            <button onClick={handleLogOut}>Logout</button>
          </>
        )}
        </div>
        
        <Link to="/favorite-exercises">favorite exercises</Link>
        <Link to="/favorite-recipes">favorite recipes</Link>

      </div>
    </header>
  )
}

export default Navigations