import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import Data from '../services/data';

const Provider = ({ children }) => {
  const [films, setFilms] = useState(null);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const listFilms = await Data.getListFilms();
    setFilms(listFilms);

    const movieGenre = listFilms.filter((movie) => movie.title === 'Ação');
    const moviePath = movieGenre.filter((movie) => movie.backdrop_path !== null);
    const randomMovie = Math.floor(Math.random() * (moviePath[0].items.results.length - 1));
    const movieOfTheTime = moviePath[0].items.results[randomMovie];
    setFeaturedMovie(movieOfTheTime);
  }, []);

  useEffect(() => {
    if (films) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [films]);

  const INITIAL_VALUE = {
    films,
    featuredMovie,
    loading,
  };

  return (
    <Context.Provider value={INITIAL_VALUE}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
