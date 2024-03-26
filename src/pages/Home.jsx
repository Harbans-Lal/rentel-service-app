import React, { useContext } from 'react'
import { myContext } from '../App';
import Example from './ShopigCart';
import Card from './Card';

const Home = () => {
  const{toggle, setToggle} = useContext(myContext);
  function hadnleClick(){
    setToggle(!toggle)
  }
  return (
    <div>
        {/* <h1 className="text-3xl font-bold underline">Rentel Services</h1> */}
        <nav className='flex justify-between w-[100vw] p-5 bg-black text-white'> 
            <header className='flex gap-2'>
                <img className='w-11 h-13 text-white' src='2389056-200.png' />
                <h1 className='font-bold text-xl text-white'> Rentel</h1>
            </header>
            <div className='flex gap-6'>
                <a className='font-bold text-l text-white' href='#'> Home</a>
                <a className='font-bold text-l text-white' href='#'> Feed</a>
                <a className='font-bold text-l text-white' href='#'> notification</a>
                <a  className='font-bold text-l text-white'href='#' onClick={hadnleClick}> Login</a>
            </div>
        </nav>

        <section className='text-center'>
          <h1 className='mt-10 font-bold text-xl  '>Rent your Services</h1>    
        </section>
        <div className='flex flex-wrap gap-6 justify-center mt-10'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        
    </div>
  )
}
export default Home;