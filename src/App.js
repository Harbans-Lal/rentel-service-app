import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import AddItem from './pages/AddItem';
import { createContext, useState } from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
function App() {
  return (
    <> 
      <div className='flex flex-col items-center'>
      <BrowserRouter> 
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/add-item' element={<AddItem/>} ></Route>

        </Routes>
      </BrowserRouter>
  
      </div>

    </>
   
  );
}
export default App;
