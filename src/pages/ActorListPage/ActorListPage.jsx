import React from 'react';
import ActorCard from '../../pages/ActorCard/ActorCard'

export default function ActorListPage({ movies }) {
    const cast = movies.map(movie => movie.cast);

    return (
        <>
        <div>
            <ActorCard cast={cast} />
        </div>
        </>
    )
}