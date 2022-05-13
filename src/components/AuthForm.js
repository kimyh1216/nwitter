import React, { useState } from "react";
import { authService, firebaseInstance } from "fbase";

const AuthForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [newAccount, setNewAccount] = useState(true)
  const [error, setError] = useState('')
  const toggleAccount = () => setNewAccount(prev => !prev)
  const onChange = (event) => {
    const { target: { name, value } } = event
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
    //console.log(value)
  }
  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      let data
      if (newAccount) {
        //create account
        data = await authService.createUserWithEmailAndPassword(email, password);
      } else {
        //log in
        data = await authService.signInWithEmailAndPassword(email, password)
      }
      console.log(data)
    } catch (error) {
      setError(error.message)
    }

  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input name='email' type='text' placeholder='Email' required value={email} onChange={onChange} />
        <input name='password' type='password' placeholder='Password' value={password} onChange={onChange} />
        <input type='submit' value={newAccount ? 'Create account' : 'Sign in'} />
      </form>
      {error}
      <div onClick={toggleAccount}>{newAccount ? "Sign in" : "Create Account"}</div>
    </>
  )
}

export default AuthForm