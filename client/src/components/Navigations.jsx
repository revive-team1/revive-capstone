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
    <div className='navbar navbar-expand-lg navbar-light fixed-top'>
      <div className='container-xxl'>
        <div className='navbar-brand'>
          <Link to="/" className='fw-bold text-secondary'>revive</Link>
        </div>
        <div>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#main-nav' aria-controls='main-nav' aria-expanded='false' aria-label='Toggle Navigation'> <span className='navbar-toggler-icon'></span></button>
          <div className='collapse navbar-collapse justify-content-end align-center' id='main-nav'>
            <div className='navbar-nav'>
              <div className='nav-item'>
                <Link to="/exercises" className='nav-link'>fitness</Link>
              </div>
              <div className='nav-item'>
                <Link to="/selfcare" className='nav-link'>self care</Link>
              </div>
              <div className='nav-item'>
                <Link to="/recipes" className='nav-link'>food</Link>
              </div>

              {(!token) ? (
                <>
                  <div className='nav-item'>
                    <Link to="/login" className='nav-link'>login</Link>
                  </div>
                  <div className='nav-item'>
                    <Link to="/register" className='nav-link'>register</Link>
                  </div>
                </>
              ) : (
                <>
                  <div className='nav-item'>
                    <Link to="/account" className='nav-link'>my account</Link>
                  </div>
                  <div className='nav-item d-md-none'>
                    <button onClick={handleLogOut} className='btn btn-secondary'>Logout</button>
                  </div>
                  <div className='nav-item ms-2 d-none d-md-inline'>
                    <button onClick={handleLogOut} className='btn btn-secondary'>Logout</button>
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigations