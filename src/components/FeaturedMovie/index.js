import React from 'react';
import PropTypes from 'prop-types';

import './FeaturedMovie.css';

const FeaturedMovie = ({ item }) => (
  <>
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
        opacity: '0.3',
      }}
    >
      <div className="featured-vertical" />
    </section>
  </>
);

FeaturedMovie.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedMovie;
