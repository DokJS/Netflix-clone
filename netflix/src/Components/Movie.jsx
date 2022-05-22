import React,{useState} from 'react';
import PropTypes from 'prop-types'
import {FaHeart,FaRegHeart} from 'react-icons/fa'

const Movie = ({url,title}) => {
    const [like, setLike] = useState(false)
    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img src={url} alt={title} className='h-auto w-full block' />
            <div className="absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 flex justify-center items-center text-white">
                <span className='font-bold text-white text-xs md:text-sm tracking-wider'>{title}</span>
                <span className='text-gray-300 absolute top-4 left-4'>{like ? <FaHeart /> : <FaRegHeart />}</span>
            </div>
        </div>
    )
}

export default Movie;
Movie.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
