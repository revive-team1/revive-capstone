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

  const handleRegister = async (e) => {
    e.preventDefault()

    try {
      const result = await register({ firstname, lastname, email, password, username });
      console.log(result)
      dispatch(updateToken(result.data.token))
      setUser(result.data)
    } catch (error) {
      console.error(error);
    }
    //navigate('/')
  }

  return (
    <>
      <h1>Register</h1>
      {error && <p>{error}</p>}
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