import React from 'react';
import Home from './Pages/Home';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';

const App = ()=> {

  return(
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}
export default App;
