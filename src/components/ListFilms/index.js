import React from "react";
import PropTypes from "prop-types";

import "./ListFilms.css";
import { Link } from "react-router-dom";

const ListFilms = ({ title, items }) => (
  <div className='movie'>
    <h2>{title}</h2>
    <div className='list-area'>
      <div className='list' style={{ width: items.results.length * 150 }}>
        {items &&
          items.results
            // Filtrando por que uma imagem está quebrada na API
            .filter((value) => value.original_title !== "Your Name")
            .map((value) => (
              <Link
                to={`/details/${value.id}/${title}`}
                key={value.id}
                className='item'
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${value.poster_path}`}
                  alt={value.original_title}
                />
              </Link>
            ))}
      </div>
    </div>
  </div>
);

ListFilms.propTypes = {
  items: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default ListFilms;
