import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Login</span>
        <form action="">
          <input type="text" placeholder='display name' />
          <input type="password" placeholder='password' />

          <button>Sign in</button>
        </form>
        <p>You don't have an account? Rgister</p>
      </div>
    </div>
  )
}

export default Login
