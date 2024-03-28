import React, { useEffect } from 'react'


function CartItemDesign(props) {
  
  console.log("second useeffect")
    
    function handleDelete(e){
      const id = e.target.id;
      const obj = {
        _id:id
      }
      fetch("http://localhost:5000/deleteCartItem",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(obj)
      })
      props.fun(Math.random()*10000);
      
    }
  return (
    
    <div className='w-[40vw] h-[40vh] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
        <img className=' h-[20%] rounded-md ' src={props.url} alt="not workign" />
        <h2 className='font-bold m-2'>{props.name}</h2>
        <p className='m-2 text-[10px]'>{props.description}</p>
        <div className=' m-5 text-[13px] flex justify-between'>
            <p>Price:{props.price}$</p>
            <button className='bg-black cursor-pointer text-white p-2' onClick={handleDelete} id={props.id} type='submit'>Delete</button>
        </div>  
      </div>

  )
}

export default CartItemDesign;