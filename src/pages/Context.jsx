import React from 'react'
import { createContext,useState } from 'react';

export const myContext = createContext();
function Context({children}) {
const [count, setCount] = useState(0);
  return (
    <myContext.Provider value={{count,setCount}}> 
    {children}
    </myContext.Provider>
  )
}

export default Context