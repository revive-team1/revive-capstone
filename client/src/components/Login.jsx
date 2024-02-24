import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../api/fetching'
import { updateToken, updateUserId } from '../actions/actionsSlice'
import { useNavigate, useParams } from 'react-router-dom'

const Login = ({ setUser }) => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [ login, { error, successMessage } ] = useLoginMutation()
  
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const result = await login({ email, password });
      console.log(result)
      dispatch(updateToken(result.data.token))
      console.log(result)
      dispatch(updateUserId(result.data.user.user_id))
      setUser(result.data.user)
      navigate('/account')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1>Login</h1>
      {error && <p>{error}</p>}
            <form onSubmit={handleLogin} >
                <div >    
                    <input
                        type='email'
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}
                    />
                    <label>Email: {''}</label>
                </div>
                <div>
                    <input
                        type='password'
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }}
                    />
                    <label >Password: {''}</label>
                    {successMessage && <p>{successMessage}</p>}
                </div>
                <button type='submit'>Login</button>
            </form>
    </>
  )
}

export default Login