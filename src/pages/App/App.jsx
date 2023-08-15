import { useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import LoginPage from '../LoginPage/LoginPage';
import ActorListPage from '../ActorListPage/ActorListPage';

export default function App() {
  const [user, setUser] = useState({});

  return (
    <main className='App'>
      { user ?
        <Routes>
          <Route path='/' element={<MoviesListPage />}></Route>
          <Route path='/movies/:movieName' element={<MoviesDetailPage />}></Route>
          <Route path='/actors' element={<ActorListPage />}></Route>
        </Routes>
        :
        <MovieDetailPage />
      }
    </main>
  );
}
