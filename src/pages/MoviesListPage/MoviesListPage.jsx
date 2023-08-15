import React from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../data';
import MovieCard from '../MovieCard/MovieCard'; 

export default function MoviesListPage() {
    return (
        <>
        <h1>Movies List Page</h1>
            <div className="movie-list">
            {movies.map((movie, index) => (
                <Link key={index} to={`/movies/${movie.title}`}>
                <MovieCard
                    title={movie.title}
                    releaseDate={movie.releaseDate}
                    posterPath={movie.posterPath}
                />
                </Link>
            ))}
            </div>
        </>
    );
}