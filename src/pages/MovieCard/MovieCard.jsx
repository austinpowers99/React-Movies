import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css'


export default function MovieCard({ movie, index }) {
    const imageURL = movie.posterPath;

    return (
        <Link to={`/movies/${movie.title}`} className='text-decoration-none'>
        <Card>
            <Card.Img variant='top' src={imageURL} alt={movie.title} />
            <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.releaseDate}</Card.Text>
            </Card.Body>
        </Card>
        </Link>
    );
}