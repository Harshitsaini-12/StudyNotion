import React from 'react'
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import {toast } from 'react-hot-toast';

function Navbar(props) {

  const isLoggedIn=props.isLoggedIn;
  const setIsLoggedIn=props.setIsLoggedIn;



  return (
    <div className='flex justify-evenly'>

      <Link to="/">
        <img src={Logo} alt='Logo' width={160}  height={32} loading='lazy'/>
      </Link>

      <nav>
        <ul className='flex gap-3'>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/">About</Link>
            </li>

            <li>
                <Link to="/">Contact</Link>
            </li>
        </ul>
      </nav>

    {/* create buttons */}
     
     <div className='flex ml-5 gap-3 mr-3'>
        {!isLoggedIn &&
            <Link to='/login'>
                <button>
                    Login
                </button>
            </Link>
        }
        {!isLoggedIn &&
            <Link to='/signup'>
                <button>
                    Signup
                </button>
            </Link>
        }
        {isLoggedIn &&
            <Link to='/'>
                <button
                 onClick={()=>{
                    setIsLoggedIn(false)
                    toast.success("Logged Out!!")
                 }}
                >
                    LogOut
                </button>
            </Link>
        }
        {isLoggedIn &&
            <Link to='/dashboard'>
                <button>
                    DashBoard
                </button>
            </Link>
        }
     </div>

    </div>
  )
}

export default Navbar
