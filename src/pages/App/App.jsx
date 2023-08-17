import React, { useState } from 'react';
import {Routes, Route } from 'react-router-dom';
import ActorListPage from '../ActorListPage/ActorListPage'
import LoginPage from '../../components/LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import NavBar from '../../components/NavBar/NavBar.jsx';
import { movies } from '../data';
import './App.css';

export default function App() {
  const [user, setUser] = useState(null)

  function signUp(name){
    setUser(name)
  }

  return (
    <main>
      <h1>React Movies</h1>
      { user ?
        <>
          <NavBar user={user}/>
          <Routes>
              <Route path="/" element={<MoviesListPage movies={movies} />} />
              <Route path="/movies/:movieName" element={<MovieDetailPage movies={movies} />} />
              <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
        :
        <LoginPage signUp={signUp} />
      }
    </main>
  )
}