import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import AddItem from './pages/AddItem';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import CartItem from './pages/CartItem';
function App() {
  return (
    <> 
      <div className='flex flex-col items-center'>
      <BrowserRouter> 
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/Home' element={<Home/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/signUP' element={<Login/>} ></Route>
          <Route path='/add-item' element={<AddItem/>} ></Route>
          <Route path='/cart' element={<CartItem/>} ></Route>

        </Routes>
      </BrowserRouter>
  
      </div>

    </>
   
  );
}
export default App;
