import React from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const NavBar = () => {
  const {user,logOut,setUser} = UserAuth()
  const redirect = useNavigate();

  const handleLogout = async ()=>{
    try{
      await logOut()
      setUser({})
      redirect('/')
    }catch(error){
      console.log(error)
    }
  }
    const buttonDisplay = user?.email ? (<div>
      <Link to="/account"><button className='text-white pr-4'>Account</button></Link>
      <button className='px-5 py-2 bg-red-600 rounded cursor-pointer text-white' onClick={handleLogout}>Logout</button>
    </div>)
    :( <div>
      <Link to="/login"><button className='text-white pr-4'>Sign In</button></Link>
      <Link to="/signup" ><button className='px-5 py-2 bg-red-600 rounded cursor-pointer text-white'>Sign Up</button></Link>
      </div>

    )
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <Link to="/"><h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1></Link>
        { buttonDisplay}
    </div>
  )
}

export default NavBar