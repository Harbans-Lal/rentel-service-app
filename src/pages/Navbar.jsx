import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { myContext } from './Context';
import Example from './ShopigCart';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserContext from './Home';



const Home = () => {
// const myCookie = useContext(myContext);
const [count, setcount] = useState(0);
useEffect(()=>{
  fetch("http://localhost:5000/getCartDAta")
  .then(res => res.json())
  .then(data => {
    setcount(data.length);
  });
},[]);

  return (
    <div>
        {/* <h1 className="text-3xl font-bold underline">Rentel Services</h1> */}
        <nav className='flex justify-between w-[100vw] p-5 bg-black text-white'> 
            <header className='flex gap-2'>
                <img className='w-11 h-13 text-white' src='2389056-200.png' />
                <h1 className='font-bold text-xl text-white'> Rentel</h1>
            </header>
            <div className='flex gap-6'>
                <Link className='font-bold text-l text-white' to='/Home'> Home</Link>
                <Link className='font-bold text-l text-white' to='#'> Feed</Link>
                <Link className='font-bold text-l text-white' to='#'> notification</Link>
                <Link className='font-bold text-l text-white' to='/add-item'> Add item</Link>
                <Link className='font-bold text-l text-white' to='/cart'> Cart<sup className='text-xl'>{count}</sup></Link>
                <Link  className='font-bold text-l text-white'to='/login' > Login</Link>
                
            </div>
        </nav>

       
    </div>
  )
}
export default Home;