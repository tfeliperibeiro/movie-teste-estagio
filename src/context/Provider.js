import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import Data from '../services/data';

const Provider = ({ children }) => {
  const [films, setFilms] = useState(null);

  useEffect(async () => {
    const listFilms = await Data.getListFilms();
    setFilms(listFilms);
  }, []);

  const INITIAL_VALUE = {
    films,
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
