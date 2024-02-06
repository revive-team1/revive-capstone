import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../api/fetching'
import { updateToken, updateUserId } from '../actions/actionsSlice'
import { useNavigate, useParams } from 'react-router-dom'

const Login = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [ login, { error, successMessage } ] = useLoginMutation()
  
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const result = await login({ email, password });
      dispatch(updateToken(result.data.token))
      console.log(result.data.user.user_id)
      dispatch(updateUserId(result.data.user.user_id))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>Login</div>
  )
}

export default Login