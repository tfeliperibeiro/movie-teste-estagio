import React, { useContext, useState } from "react";
import Context from "../../context/Context";
import "./ListFilms.css";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

const imageSize = 150;

const ListFilms = ({ title, items }) => {
  const { searchMovie } = useContext(Context);

  const [scrollX, setScrollX] = useState(0);

  const handleNextButton = () => {
    let positionX = scrollX + Math.round(window.innerWidth / 2);
    if (positionX > 0) {
      positionX = 0;
    }
    setScrollX(positionX);
  };

  const handleBeforeButton = () => {
    let positionX = scrollX - Math.round(window.innerWidth / 2);
    let positionW = items.results.length * 150;
    if (window.innerWidth - positionW > positionX) {
      positionX = window.innerWidth - positionW - 60;
    }
    setScrollX(positionX);
  };

  return (
    <div className='movie'>
      <h2>{title}</h2>
      <div className='btn-left' onClick={handleNextButton}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className='btn-right' onClick={handleBeforeButton}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className='movie-listarea'>
        <div
          className='movie-list'
          style={{
            marginLeft: scrollX,
            width: items.results.length * imageSize,
          }}
        >
          {items &&
            items.results
              .filter((value) =>
                value.title.toLowerCase().includes(searchMovie)
              )
              .filter((value) => value.original_title !== "Your Name")
              .map((value) => (
                <div key={value.id} className='movie-item'>
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
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

ListFilms.propTypes = {
  items: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default ListFilms;
