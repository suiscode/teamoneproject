import React from 'react'
import LoginForm from './login-form'

function LoginPage() {
  return (
    <div className='w-full h-full'>
       <div style={{ position: "relative", opacity:"1", } }>
      <video width="100%" height="100%" controls autoPlay loop muted 
     >
        <source src="/carr.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <LoginForm/>
    </div>
    </div>
  )
}

export default LoginPage