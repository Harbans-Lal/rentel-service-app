import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { createContext, useState } from 'react';
export const myContext = createContext();
function App() {

  const [toggle, setToggle] = useState(false);
  return (
    <> 
      <div className='flex flex-col items-center'>
      <myContext.Provider value={{toggle, setToggle}}>
       
          {toggle&&<Login />}
          <Home />
          
        </myContext.Provider>
      </div>

    </>
   
  );
}
export default App;
