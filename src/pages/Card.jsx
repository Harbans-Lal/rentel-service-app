import React from 'react'

function Card() {
  return (
    <div>
        <div className='border-2 w-[100vw] p-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
            <img src= "download.jpeg" alt="some" />
            <p className='mt-2 mb-2 font-bold text-xl'> Laptop</p>
            <p className='mb-2 mt-4'>
            Lorem Ipsum is simply dummy text of  galley of type and scrambled it to make a type specimen book. 
            </p>
            <div className='flex justify-between'>
              <p className='font-bold'>Price:200$</p>
              <button className='bg-black text-white p-2' type='submit '> Rent Now</button>
            </div>     
        </div>
    </div>
  )
}

export default Card;