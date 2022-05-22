import axios from 'axios';
import React, {useState,useEffect}from 'react';
import Movie from './Movie';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
const STARTPATH = 'https://image.tmdb.org/t/p/w500/'

const Row = ({title,fetchUrl,rowId}) => {
    const [movies, setMovies] = useState([])
    

    useEffect(()=>{
        axios.get(fetchUrl)
        .then(response=>{
            setMovies(response.data.results)
        })
        .catch(error=>{
            console.log(error)
        })
    },[fetchUrl])
    
const slideLeft = ()=>{
    const slider = document.getElementById(`slider${rowId}`)
    slider.scrollLeft = slider.scrollLeft - 500
}
const slideRight = ()=>{
    const slider = document.getElementById(`slider${rowId}`)
    slider.scrollLeft = slider.scrollLeft + 500
}
  return (
    <>
    <h2 className='text-white font-bold p-4 md:text-xl'>{title}</h2>
    <div className="relative flex items-center group">
        <MdChevronLeft className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0' size={40} onClick={slideLeft}/>
        <div id={`slider${rowId}`} className=' w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
        {
            movies?.map((movie,index)=>(
                <Movie key={index} url={`${STARTPATH}/${movie?.backdrop_path}`} title={movie?.title}/>
            ))
        }
        </div>
        <MdChevronRight size={40} className='bg-white rounded-full absolute opacity-50 cursor-pointer hover:opacity-100 z-10 right-0 hidden group-hover:block' onClick={slideRight}/>
    </div>
    </>
  )
}

export default Row