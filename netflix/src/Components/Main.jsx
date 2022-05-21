import axios from 'axios';
import React,{useState,useEffect} from 'react';
import requests from '../Requests';

const Main = () => {
    const [movies, setMovies] = useState([])
    const movie = movies[Math.floor(Math.random()* movies.length)]
    useEffect(()=>{
        axios.get(requests.requestPopular)
        .then(response =>{
            setMovies(response.data.results)
        })
        .catch(error => {
            console.log(error)
        })
    },[])
  console.log(movies)
  return movie && (
    <div className='w-full h-[550px] text-white relative'>
        <div className='w-full h-[550px] z-10 absolute bg-gradient-to-r from-black'></div>
        <div className='w-full h-full'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="movie couverture"  className='w-full h-full object-cover object-center'/>
        </div>
        <div className='absolute z-20  w-full text-white top-2/4 px-4 space-y-2 sm:space-y-3'>
            <h1 className='font-medium text-2xl'>{movie.title}</h1>
            <div className='flex space-x-2'>
                <button className='px-4 py-2 font-semibold bg-white rounded text-black text-xs capitalize'>Play</button>
                <button className='bg-transparent border-gray-300 border-[1px] tracking-wider text-xs px-4 py-2 capitalize'>Watch Later</button>
            </div>
            <span className='block text-gray-500 opacity-75'>Released {movie.release_date}</span>
            <p className=''>{movie.overview}</p>
        </div>
    </div>
  )
}

export default Main