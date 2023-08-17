import React from 'react'

export default function ActorCard({ cast }) {
    const castList = cast.flat();
    const castSet = new Set(castList);
    const actors = Array.from(castSet);

    return (
        <div className='ActorCard'>
            {actors.map((actor, index) => (
            <Card key={index} className='mb-2'>
                <Card.Body>
                <Card.Text>{actor}</Card.Text>
                </Card.Body>
            </Card>
            ))}
        </div>
    );
}