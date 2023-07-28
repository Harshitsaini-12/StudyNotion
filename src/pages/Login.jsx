import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'

function Login({setIsLoggedIn}) {
  return (
    <Template
      title="Welcome Back"
      desc1="Build Skills for today,tommorow and Beyond."
      desc2="Education for future-proof your carrer."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
