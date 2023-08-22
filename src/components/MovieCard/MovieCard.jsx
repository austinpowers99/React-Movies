import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css'


export default function MovieCard({ movie, index }) {
    const imageURL = movie.posterPath;

    return (
        <Link to={`/movies/${movie.title}`} className='text-decoration-none'>
        <div>
            <div variant='top' src={imageURL} alt={movie.title} />
            <div>{movie.title}</div>
            <div>{movie.releaseDate}</div>
        </div>
        </Link>
    );
}