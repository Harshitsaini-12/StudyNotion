import "./App.css";
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import DashBoard from './pages/Dashboard'
import { Routes,Route } from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const[isLoggedIn,setIsLoggedIn]=useState(false);

  return(
  <div className="w-screen h-screen flex-col flex bg-richblack-900">

    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/dashboard" element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <DashBoard/>
        </PrivateRoute>
      }/>
    </Routes>

  </div>
)};

export default App;
