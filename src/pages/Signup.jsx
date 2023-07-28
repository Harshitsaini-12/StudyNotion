import React from 'react'
import Template from '../components/Template'
import signup from '../assets/signup.png'

function Signup({setIsLoggedIn}) {
  return (
    <Template
      title="Join the million learning to code with StudyNotion for free"
      desc1="Build Skills for today,tommorow and Beyond."
      desc2="Education for future-proof your carrer."
      image={signup}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup

