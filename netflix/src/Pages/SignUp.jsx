import React, {useState} from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'
const NETFLIXBGURL= 'https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/1c51f1a1-ab8e-46f3-9c39-f0e9d55ac7cd/SN-en-20220516-popsignuptwoweeks-perspective_alpha_website_medium.jpg'

const SignUp = () => {
  const redirect = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user,signUp} = UserAuth()

  const handleSubmit = async (e)=>{
    try{
      await signUp(email,password)
      redirect('/')
    }catch(error){
      console.log(error)
    }
  }
  return (
    <>
    <div className="w-full h-screen ">
      <img src={NETFLIXBGURL} alt="NETFLIX Background" className='hidden sm:block absolute w-full h-full object-cover' />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen '>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
        <div className='max-w-[320px] mx-auto py-16'>
        <h1 className='text-3xl font-bold'>Sign Up</h1>
        <form onSubmit={handleSubmit} className='flex flex-col py-4 space-y-6' >
          <input type="email" placeholder='email' autoComplete='email' className='p-3 bg-gray-600 rounded' onChange={(e)=>setEmail(e.target.value)} value={email}/>
          <input type="password" placeholder='password' autoComplete='current-password' className='p-3 bg-gray-600 rounded' onChange={(e)=>setPassword(e.target.value)} value={password}/>
          <button className='bg-red-600 py-3  rounded font-bold' >Sign Up</button>
          <div className='text-gray-500 text-xs space-y-10'>
            <div className='flex flex-row '>
              <div className='w-[80%] flex items-center space-x-2 '>
                <input type="checkbox" />
                <span>Remember me</span>
              </div>
              <div className='w-[20%]'>
                <span>Need Help ?</span>
              </div>
            </div>
            <div>
              <p className='text-sm'>Already subscrided to netflix ! <Link to='/login'><span className='text-white'>Sign In</span></Link></p>
            </div>
          </div>
        </form>
        </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default SignUp