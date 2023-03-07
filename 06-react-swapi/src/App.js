import React, { useState, useEffect, useCallback } from 'react';

import './App.css';
import Header from './components/Layout/Header';
import ParallaxPixelStars from './components/Layout/ParallaxPixelStars';
import MoviesList from './components/Movies/MoviesList';

// const DUMMY_MOVIES = [
//   {
//     id: 1,
//     title: "Episode 1",
//     openingText: "This is the opening text",
//     releaseDate: "2021-05-18"
//   },
//   {
//     id: 2,
//     title: "Episode 2",
//     openingText: "This is the opening text",
//     releaseDate: "2021-05-19"
//   },
//   {
//     id: 3,
//     title: "Episode 3",
//     openingText: "This is the opening text",
//     releaseDate: "2021-05-20"
//   }
// ];

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // // .then chain syntax
  // const fetchMoviesHandler = () => {
  //   fetch('https://swapi.dev/api/films/').then(response => {
  //     return response.json();
  //   }).then(data => {
  //     const transformedMovies = data.results.map(movieData => {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         openingText: movieData.opening_crawl,
  //         releaseDate: movieData.release_date
  //       };
  //     });
  //     setMovies(transformedMovies);
  //   });
  // };

  // async await syntax
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        };
      });
      setMovies(transformedMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p className='fallback-paragraph'>No movies found. Fetch some!</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p className='fallback-paragraph'>{error}</p>;
  }

  if (isLoading) {
    content = <p className='fallback-paragraph'>Fetching movies...</p>;
  }

  return (
    <>
      <ParallaxPixelStars />
      <Header />
      <section className='fetch-section'>
        <button className='fetch-movies-button' onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
}

export default App;
