import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function SignUp({setIsLoggedIn}) {

  const navigate=useNavigate();
  
  const[formData,setFormData]=useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmPassword:""
  });

  const [showPassword,setShowPassword]=useState(false);

  function changeHandler(event){
    setFormData((prevData)=>({
      ...prevData,
      [event.target.name]:event.target.value
    }))
  }

  function submitHandler(e){
    e.preventDefault();

    if(formData.confirmPassword!== formData.password){
      toast.error("Password do not match..");
      return;
    }
    
    setIsLoggedIn(true);
    toast.success("Account Created.");

    navigate('/dashboard')
  }


  return (
    <div>
      
      <div>
        <button>
          Student
        </button>
        <button>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>

        <div>
        {/* First Name and last name  */}
        <label>
            <p>First Name<sup>*</sup></p>
            <input
              required
              type='text'
              name='firstname'
              onChange={changeHandler}
              placeholder='enter first name'
              value={formData.firstname}
            />
          </label>

          <label>
            <p>Last Name<sup>*</sup></p>
            <input
              required
              type='text'
              name='lastname'
              onChange={changeHandler}
              placeholder='enter last name'
              value={formData.lastname}
            />
          </label>
        </div>
        {/* email address  */}
        <label>
          <p>Email Address<sup>*</sup></p>
          <input
            required
            type='email'
            name='email'
            onChange={changeHandler}
            placeholder='enter email'
            value={formData.email}
          />
        </label>
        {/* password and confirm password  */}

        <div>
          <label>
            <p>Create Password<sup>*</sup></p>
            <input
              required
              type={showPassword?("text"):("password")}
              name='password'
              onChange={changeHandler}
              placeholder='enter password'
              value={formData.password}
            />

            <span onClick={()=>setShowPassword((prev)=>!prev)}>
              {showPassword ?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>) }
            </span>

          </label>

          <label>
            <p>Confirm Password<sup>*</sup></p>
            <input
              required
              type={showPassword?("text"):("password")}
              name='confirmPassword'
              onChange={changeHandler}
              placeholder='Confirm password'
              value={formData.confirmPassword}
            />

            <span onClick={()=>setShowPassword((prev)=>!prev)}>
              {showPassword ?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>) }
            </span>

          </label>
        </div>

        <button>
          Create Account
        </button>
      </form>


    </div>
  )
}

export default SignUp
