import React from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'

export default function MoviesListPage({movies}) {
    return (
        <>
        <div className='MovieCardContainer'>
            {movies.map((movie, index) => (
            <MovieCard movie={movie} key={index} index={index} />
            ))}

        </div>
        </>
    )
}