import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { myContext } from '../App';
import Example from './ShopigCart';
import Card from './Card';

const Home = () => {

  return (
    <div>
        {/* <h1 className="text-3xl font-bold underline">Rentel Services</h1> */}
        <nav className='flex justify-between w-[100vw] p-5 bg-black text-white'> 
            <header className='flex gap-2'>
                <img className='w-11 h-13 text-white' src='2389056-200.png' />
                <h1 className='font-bold text-xl text-white'> Rentel</h1>
            </header>
            <div className='flex gap-6'>
                <Link className='font-bold text-l text-white' to='/'> Home</Link>
                <Link className='font-bold text-l text-white' to='#'> Feed</Link>
                <Link className='font-bold text-l text-white' to='#'> notification</Link>
                <Link className='font-bold text-l text-white' to='/add-item'> Add item</Link>
                <Link  className='font-bold text-l text-white'to='/login' > Login</Link>
                
            </div>
        </nav>

       
    </div>
  )
}
export default Home;