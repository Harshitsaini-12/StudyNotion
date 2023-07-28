import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Form, Link, useNavigate } from 'react-router-dom';

function LoginForm({setIsLoggedIn}) {

  const navigate=useNavigate();

  const [formData,setFormData]=useState({
    email:"",password:""
  })

  const [showPassword,setShowPassword]=useState(false);

  function changeHandler(e){
    
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }

  function submitHandler(e){
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In!")
    navigate("/dashboad")

    // setFormData(e.target.value);
    // console.log(e.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        <p>
          Email Address<sup>*</sup>
        </p>
        <input
        required
        type="email"
        value={formData.email}
        onChange={changeHandler}
        placeholder='Enter email id'
        name='email'
        />
      </label>

      <label>
        <p>
          Password<sup>*</sup>
        </p>
        <input
        required
        type={ showPassword ? ("text") : ("password") }
        value={formData.password}
        onChange={changeHandler}
        placeholder='Enter Password'
        name='password'
        />

        <span onClick={()=>setShowPassword((prev)=>!prev)}>
          {showPassword ?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>) }
        </span>

        <Link to="#">
          <p>
            Forgot Password
          </p>
        </Link>
      </label>

      <button>
        Sign In
      </button>

      </form>
  )
}

export default LoginForm
