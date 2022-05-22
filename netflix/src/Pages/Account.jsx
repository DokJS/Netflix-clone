import React from 'react'
import ShowsSaved from '../Components/ShowsSaved'
const NETFLIXBGURL= 'https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/1c51f1a1-ab8e-46f3-9c39-f0e9d55ac7cd/SN-en-20220516-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
const Account = () => {
  return (
    <>
    <div className="w-full text-white">
      <img src={NETFLIXBGURL} alt="netflix background" className='w-full h-[400px] object-cover' />
      <div className='bg-black/60 top-0 left-0 h-[550px]'>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <ShowsSaved/>
    </div>
    </>
  )
}

export default Account