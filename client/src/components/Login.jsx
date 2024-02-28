import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../api/fetching'
import { updateToken, updateUserId } from '../actions/actionsSlice'
import { useNavigate, useParams } from 'react-router-dom'

const Login = ({ setUser }) => {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [ login, { error, successMessage } ] = useLoginMutation()
  const [errorMessage, setErrorMessage] = useState('')
  
  const handleLogin = async (e) => {
    e.preventDefault()
    setErrorMessage('')

    if (!username) {
      setErrorMessage('Username is required')
      return;
    }

    if (!password) {
      setErrorMessage('Password is required')
      return;
    }

    try {
      const result = await login({ username, password });
      console.log(result)
      dispatch(updateToken(result.data.token))
      console.log(result)
      setUser(result.data.user)
      navigate('/account')
    } catch (error) {
      console.error(error);
      console.log(error);
      const message = 'Username or password is not correct. If issue persists, please re-register.';
      setErrorMessage(message);
    }
  }

  return (
    <>
    <br/> <br/> <br/> <br/>
      <h1 className='m-4'>Login</h1>
      <div className="longBreakLine"></div> <br/>
      {errorMessage && <p>{errorMessage}</p>}
            <form onSubmit={handleLogin} className='login-register-container'>
                <div className='form-floating mb-3'>    
                    <input
                        className='form-control'
                        id='floatingUsername'
                        placeholder='username'
                        type='text'
                        onChange={(event) => {
                            setUsername(event.target.value)
                        }}
                      required
                    />
                    <label htmlFor='floatingUsername'>Username: {''}</label>
                </div>
                <div className='form-floating'>
                    <input
                        className='form-control'
                        id='floatingPassword'
                        placeholder='password'
                        type='password'
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }}
                      required
                    />
                    <label htmlFor='floatingPassword'>Password: {''}</label>
                    {successMessage && <p>{successMessage}</p>}
                </div>
                <br/>
                <button className='btn btn-outline-dark' type='submit'>Login</button>
            </form>
    </>
  )
}

export default Login