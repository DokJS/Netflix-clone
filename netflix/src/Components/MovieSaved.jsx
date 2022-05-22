import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { doc,updateDoc } from 'firebase/firestore';
import { UserAuth } from '../Context/AuthContext';
import { db } from '../firebase';


const MovieSaved = ({title,url,id,movies}) => {
    const {user}= UserAuth();
    const dataRef = doc(db,'users',`${user?.email}`)

    const deleteMovie = async (param)=>{
        try{
            const arrWithoutToDelete = movies?.filter(movie => movie.id !== id)
            await updateDoc(dataRef,{
                saveShows : arrWithoutToDelete
            })
        }catch(error){
            console.log(error)
        }
    }
  return (
    <>
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img src={url} alt={title} className='h-auto w-full block' />
            <div className="absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 flex justify-center items-center text-white">
                <span className='font-bold text-white text-xs md:text-sm tracking-wider'>{title}</span>
            </div>
            <span className='absolute top-4 right-4' onClick={()=>deleteMovie(id)}><AiOutlineClose className='text-white'/></span>
        </div>
    </>
  )
}

export default MovieSaved