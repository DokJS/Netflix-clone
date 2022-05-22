import React from 'react'


const MovieSaved = ({title,url}) => {
  return (
    <>
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img src={url} alt={title} className='h-auto w-full block' />
            <div className="absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 flex justify-center items-center text-white">
                <span className='font-bold text-white text-xs md:text-sm tracking-wider'>{title}</span>
            </div>
        </div>
    </>
  )
}

export default MovieSaved