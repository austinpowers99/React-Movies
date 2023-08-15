import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../data.js';

export default function MovieDetailPage() {
    const { movieName } = useParams();
    const movie = movies.find(movie => movie.title === movieName);

    if (!movie) {
        return <p>Movie not found</p>;
    }

    const { title, releaseDate, posterPath, cast } = movie;

    return (
        <>
        <h1>Movie Detail Page</h1>
        <div className="movie-detail">
            <img src={posterPath} alt={title} />
            <h2>{title}</h2>
            <p>Release Date: {releaseDate}</p>
            <p>Cast: {cast.join(', ')}</p>
        </div>
        </>
    );
}