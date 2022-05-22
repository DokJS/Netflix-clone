import React, { useEffect, useState } from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import { updateDoc,doc,onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import { UserAuth } from '../Context/AuthContext';
import MovieSaved from './MovieSaved';


const ShowsSaved = () => {
    const [movies, setMovies] = useState([])
    const {user} = UserAuth()
    const dataRef = doc(db,'users',`${user.email}`)

    useEffect(()=>{
       onSnapshot(dataRef,doc=>{
        setMovies(doc.data()?.saveShows)
       })
    },[user?.email])
    console.log(movies)

    const slideLeft = ()=>{
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = ()=>{
        const slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }
  return (
    <>
        <h2 className='text-white font-bold p-4 md:text-xl'>My shows</h2>
        <div className="relative flex items-center group">
        <MdChevronLeft className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0' size={40} onClick={slideLeft}/>
        <div id={`slider`} className=' w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
        {
            movies?.map((movie,index) => (
                <MovieSaved index={`${movie?.id}-${index}`} title={movie?.title} url={movie?.url} id={movie?.id} movies={movies}/>
            ))
        }
        </div>
        <MdChevronRight size={40} className='bg-white rounded-full absolute opacity-50 cursor-pointer hover:opacity-100 z-10 right-0 hidden group-hover:block' onClick={slideRight}/>
    </div>
    </>
  )
}

export default ShowsSaved