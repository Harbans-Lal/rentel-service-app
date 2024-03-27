import React from 'react'
import { useState, createContext } from 'react';
import { Link } from 'react-router-dom';


 function Login() {
    const[toggle, setToggle] = useState(false);
    function handleSign(){
        setToggle(true);
    }
    function handleLog(){
        setToggle(false);
    }
  return (
    <>
        {toggle?(
            <form action='http://localhost:5000/sign' method='post' className=' flex flex-col justify-center mt-5 align-center w-[50vw] border-2 rounded-md p-9'> 
            <h1 className='text-black font-bold text text-3xl mt-3 align-center'>Sign Up</h1>
            <input className='mb-2 p-3 mt-3' type='emial' name='email' placeholder='email' /> 
            <input className='mb-2 p-3 mt-3' type='text' name='uName' placeholder='username' /> 
            <input className='mb-2 p-3 mt-3'  type='password' name='passwd' placeholder='password' /> 
            <p className='mt-4 mb-4'>Already have accounta ? <Link to="/login" className='cursor-pointer  text-blue-500' onClick={handleLog}>Login</Link></p>
            <button className='p-3 bg-black text-white' type='submit'> Sign Up </button>
        </form>):(
            <form action='http://localhost:5000/login' method='post' className='flex flex-col justify-center mt-5 align-center w-[50vw] border-2 rounded-md p-9'> 
            <h1 className='text-black font-bold text text-3xl mt-3 align-center'>Login</h1>
            <input className='mb-2 p-3 mt-3' type='text' name='uName' placeholder='username' /> 
            <input className='mb-2 p-3 mt-3'  type='password' name='passwd' placeholder='password' /> 
            <p className='mt-4 mb-4'>dont have accounta ? <Link to="/signUp" className='cursor-pointer text-blue-300' onClick={handleSign}>sign Up</Link></p>
            <button className='p-3 bg-black text-white' type='submit'> Login </button>
        </form>
        )}
    </>
  )
}
export default Login;