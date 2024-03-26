import React from 'react'

function AddItem() {
  return (
    <form action="http://localhost:5000/additem" method='post' className=' flex flex-col justify-between  align-center mt-10 p-10 border-2 rounded-md '>
    <h1 className='text-bold text-2xl'>Add item </h1>
        <input type='text' name="name" className='p-2 m-3' placeholder=' Name'></input>
        <input  type='text' name="price" className='p-2 m-3' placeholder='Price'></input>
        <input type='text' name="des" className='p-2 m-3' placeholder='Description'></input>
        <input type='text' name="url" className='p-2 m-3' placeholder='image url'></input>       
       <button type="submit" className='p-3 bg-black text-white '>Add item</button>

    </form>
  )
}

export default AddItem;