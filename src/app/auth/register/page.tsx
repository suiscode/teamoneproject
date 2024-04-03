import React from 'react'
import RegisterForm from './register-form'

function RegisterPage() {
  return (
    <div className='w-full h-full'>
       <div style={{ position: "relative", opacity:"1", } }>
      <video width="100%" height="100%" controls autoPlay loop muted 
     >
        <source src="/carr.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <RegisterForm/>
    </div>
    </div>
    
  )
}

export default RegisterPage