import React from 'react'
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './Navbar';
import Home from './Home';
import Header from './Header';
import Body from './Body';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import MyMap from './Map';


const App = () => {
  return (
    <div>

      <BrowserRouter>
      <div>
     
      </div>
      <div>
      <Header/>
      </div>
      <div>
        <Body/>
      </div>

      
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        
      </Routes>
      </BrowserRouter>
       
    </div>
  )
}

export default App;