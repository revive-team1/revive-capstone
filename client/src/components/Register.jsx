import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRegisterMutation } from '../api/fetching'
import { updateToken, updateUserId } from '../actions/actionsSlice'


const Register = ( {setUser}) => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ username, setUsername ] = useState('')
  const [ firstname, setFirstName ] = useState('')
  const [ lastname, setLastName ] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [ register, {error, successMessage } ] = useRegisterMutation()
  const [errorMessage, setErrorMessage] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()
    setErrorMessage('')

    if (!password) {
      setErrorMessage('Password is required')
      return;
    }

    if (!email) {
      setErrorMessage('Email is required')
      return;
    }

    if (!username) {
      setErrorMessage('Username is required')
      return;
    }

    try {
      const result = await register({ firstname, lastname, email, password, username }).unwrap();
      console.log(result)
      dispatch(updateToken(result.token))
      dispatch(updateUserId(result.user.user_id))
      setUser(result.user)
      navigate('/account')
    } catch (error) {
      console.error(error);
      const message = error.data.message || 'An error occurred please try again';
      setErrorMessage(message)
      alert(message)
    }
    
  }

  return (
    <>
      <h1>Register</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <div>
        <form onSubmit={handleRegister}>
          <div>
            <input
              type='text'
              value={firstname}
              onChange={(event) => {
                setFirstName(event.target.value)
              }}
            />
            <label>First Name: {''}</label>
          </div>
            
          <div>
            <input
              type='text'
              value={lastname}
              onChange={(event) => {
                setLastName(event.target.value)
              }}
            />
            <label>Last Name: {''}</label>
          </div>

          <div>
            <input
              type='text'
              value={username}
              onChange={(event) => {
                setUsername(event.target.value)
              }}
            required
            />
            <label>Username: {''}</label>
          </div>

          <div>
            <input
              type='email'
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
              }}
            required
            />
            <label>Email: {''}</label>
          </div>

          <div>
            <input
              id='floatingPassword'
              type='password'
              value={password}
              onChange={(event) => {
                setPassword(event.target.value)
              }}
            required
            />
            <label htmlFor='floatingPassword'>Password: {''}</label>
          </div>
          {successMessage && <p>{successMessage}</p>}
          <button type='submit'>Register</button>
        </form>
      </div>
    </>
  )
}

export default Register