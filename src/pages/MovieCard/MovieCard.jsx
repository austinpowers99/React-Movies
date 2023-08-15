import React from 'react';

export default function MovieCard({ title, releaseDate, posterPath }) {
    const cardStyle = {
        backgroundImage: `url(${posterPath})`,
    };

    return (
        <div className="movie-card" style={cardStyle}>
        <div className="movie-info">
            <h2>{title}</h2>
            <p>Release Date: {releaseDate}</p>
        </div>
        </div>
    );
}