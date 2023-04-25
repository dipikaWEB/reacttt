import Navbar from './navbar';
import Home from './home';
import Login from './login';
import Register from './register';
import Reset from './reset';

import './App.css';
import {BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
    <Routes> 
        <Route path="/" element={<Navbar/> } /> 
        <Route path="/home" element={<Home/> } />
        <Route path="/login" element={<Login/> } />
        <Route path="/register" element={<Register/> } />
        <Route path="/reset" element={<Reset/> } />
  
        </Routes>
   
   </BrowserRouter>

    </div>
  );
}

export default App;
