import React, { useEffect, useState } from "react";
import Card from "./Card";
import cardData from "./cardJson";
import { Navigate} from "react-router-dom";
import Cookies from 'js-cookie';
import {FallingLines} from "react-loader-spinner";

export default function Home() {
  const [data, setData] = useState([]);
  const myCookie = Cookies.get('token');

 useEffect(()=>{
  async function allData(){
    try{
     
      if(!myCookie){
        <Navigate to="/login" replace={true} />

      }else{
        let r = await fetch('http://localhost:5000/userItems');
        let data =  await r.json();
        setData(data);
      }
    }catch(err){
      console.log(err)
    }
  }
  allData()
 },[])
    
    console.log(data);
  return (
    <div>
      <section className="text-center">
        <h1 className="mt-10 font-bold text-xl  ">Rent your Services</h1>
      </section>
      <div className="flex flex-wrap m-5 justify-evenly gap-5">

      {(data.length>0)?data.map(item => {
        return <Card url = {item.url} name={item.name} price={item.price} description ={item.des} />
      }):<FallingLines/> }

      </div>
    </div>
  );
}
