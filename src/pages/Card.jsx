import React from "react";

function Card(props) {
  console.log(props.name);
  return (
    <div className="border-2 w-[20%]  rounded-md p-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <img src={props.url} alt="some" />
      <p className="mt-2 mb-2 font-bold text-xl"> {props.name}</p>
      <p className="mb-2 mt-4">
        {props.description}
      </p>
      <div className="flex justify-between">
        <p className="font-bold">{props.price}</p>
        <button className="bg-black text-white p-2" type="submit ">
          Rent Now
        </button>
      </div>
    </div>
  );
}

export default Card;
