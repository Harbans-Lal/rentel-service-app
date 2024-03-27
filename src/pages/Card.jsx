import React from "react";
import { Navigate } from "react-router-dom";
function Card(props) {
  function handleClick(e){
    const id  = e.target.id;
    const dummy={
     id:id
    }

    fetch("http://localhost:5000/addCart",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(dummy)
    })
    .then(resp=> resp.json()).then((dar)=> console.log(dar))
    .catch(err=>console.log(err))

  }
  return (
    <div className="border-2 w-[20%]  rounded-md p-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <img src={props.url} alt="some" />
      <p className="mt-2 mb-2 font-bold text-xl"> {props.name}</p>
      <p className="mb-2 mt-4">
        {props.description}
      </p>
      <div className="flex justify-between">
        <p className="font-bold">{props.price}</p>
        <button id={props.id} onClick={handleClick} className="bg-black text-white p-2" type="submit ">
          Rent Now
        </button>
      </div>
    </div>
  );
}

export default Card;
