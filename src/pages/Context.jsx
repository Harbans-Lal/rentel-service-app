import React from 'react'
import { createContext } from 'react';
import Cookies from 'js-cookie';


const myCookie = Cookies.get('token');

export const myContext = createContext();
function Context({children}) {

  return (
    <myContext.Provider value={myCookie}> 
    {children}
    </myContext.Provider>
  )
}

export default Context