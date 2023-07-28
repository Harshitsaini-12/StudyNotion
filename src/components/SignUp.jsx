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
  const [accountType,setAccountType]=useState("student");
  const [showConfirmedPassword,setConfirmedPassword]=useState(false);

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

    const accountData={
      ...formData
    }

    const finalData={
      ...accountData,
      accountType
    }
    
    //returning the output of the form submitted....
    console.log(finalData);

  }


  return (
    <div>
      
      <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button className={`${accountType === "student" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
             onClick={()=>setAccountType("student")}
            
            >
          Student
        </button>
        <button className={`${accountType === "instructor" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=>setAccountType("instructor")}>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler} >

        <div className='flex gap-x-4 mt-[20px]'>
        {/* First Name and last name  */}
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
            <input
              required
              type='text'
              name='firstname'
              onChange={changeHandler}
              placeholder='enter first name'
              value={formData.firstname}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
          </label>

          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
            <input
              required
              type='text'
              name='lastname'
              onChange={changeHandler}
              placeholder='enter last name'
              value={formData.lastname}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
          </label>
        </div>
        {/* email address  */}
        <div className='mt-[20px]'>
          <label className='w-full mt-[20px]'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
            <input
              required
              type='email'
              name='email'
              onChange={changeHandler}
              placeholder='enter email'
              value={formData.email}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
          </label>
        </div>
        
        {/* password and confirm password  */}

        <div className='w-full flex gap-x-4 mt-[20px]'>
          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
            <input
              required
              type={showConfirmedPassword?("text"):("password")}
              name='password'
              onChange={changeHandler}
              placeholder='enter password'
              value={formData.password}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

            <span onClick={()=>setConfirmedPassword((prev)=>!prev)} className='absolute right-3 top-[38px] cursor-pointer' >
              {showConfirmedPassword ?(<AiOutlineEye fontSize={24} fill='#AFB2BF'/> ):(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) }
            </span>

          </label>

          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
            <input
              required
              type={showPassword?("text"):("password")}
              name='confirmPassword'
              onChange={changeHandler}
              placeholder='Confirm password'
              value={formData.confirmPassword}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

            <span onClick={()=>setShowPassword((prev)=>!prev)} className='absolute right-3 top-[38px] cursor-pointer'>
              {showPassword ?(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) }
            </span>

          </label>
            <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Create Account
          </button>
        </div>
      </form>

    </div>
  )
}

export default SignUp
