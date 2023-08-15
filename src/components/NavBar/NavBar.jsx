import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ user }) {
    return (
        <nav>
            <ul>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/actors">Actors</Link></li>
            </ul>
            <p>Welcome {user}!</p>
        </nav>
    );
}