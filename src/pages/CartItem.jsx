import React, { useEffect, useState } from 'react'
import CartItemDesign from './CartItemDesign';

function CartItem() {

  const [cartData, setCartData]  = useState([]);
  const [subToal, setSubTotal] = useState(0);
  const [refresh, setRefresh] = useState(0);

  useEffect( ()=>{
    console.log("first useeffect")
     fetch("http://localhost:5000/getCartDAta")
     .then(r => r.json())
     .then(data =>  {
      setCartData(data)
      const sum = data.reduce((acc, val) => acc + val.price, 0);
      setSubTotal(sum);
     } )
     .catch(err => console.log(err))
  },[refresh])
  console.log(refresh)
  
  return (
    <div className='flex  w-[100vw] ml-[10%] p-10'>
      <div className='flex gap-16 '>
        <div className='flex  flex-col gap-5 w-[70%]' >
        <h1 className=' font-bold text-2xl m-5'>Cart item</h1>
              {cartData.map(item => {
                  return <CartItemDesign fun ={setRefresh} id={item._id} url = {item.url} name={item.name} price={item.price} description ={item.des} />
                })}  
        </div> 
        <div className='flex flex-col w-[30%]'>
              <h1 className='font-bold text-2xl m-2  '>Order Summary</h1>
              <p  className='m-2  flex justify-evenly border-b-2 border-black '><span>Sub Total :</span><span>{subToal}</span> </p>
              <p className='m-2  flex justify-between border-b-2 border-black '> <span>Shipping Charges :</span><span>60</span> </p>
              <p className='m-2  flex justify-between border-b-2 border-black '> <span> tax :</span> <span>28</span></p>
              <p className='m-2  flex justify-between border-b-1 border-black '> <span className='text-xl'>Total :</span> <span>{subToal+88}</span></p>
          </div>
      </div>
      
    </div>

  )
}

export default CartItem