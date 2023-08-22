import React from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetailPage({movies}) {
    const { movieName } = useParams();
    const movie = movies.find(movie => movie.title === movieName)

    return (
        <>
        <div>
            <h2>{movie.title}</h2>
            <p><b>Release Date:</b> {movie.releaseDate}</p>
            <p><b>Cast:</b> {movie.cast.join(', ')}</p>
        </div>
        <div>
            <img src="{movie.posterPath}" alt=''/>
        </div>
        </>
    )
}