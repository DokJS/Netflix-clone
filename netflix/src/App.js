import React from 'react';
import Home from './Pages/Home';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import { AuthContextProvider } from './Context/AuthContext';
import SignUp from './Pages/SignUp';
import Account from './Pages/Account';
import Login from './Pages/Login';
import ComponentProtector from './Components/ComponentProtector';


const App = ()=> {

  return(
    <>
      <AuthContextProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/account' element={<ComponentProtector>
          <Account/>
        </ComponentProtector>}/>
      </Routes>
      </AuthContextProvider>
    </>
  )
}
export default App;
