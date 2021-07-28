import React, { useContext } from "react";
import Context from "../../context/Context";
import { LinearProgress } from "@material-ui/core";

import "./SearchMovie.css";

const SearchMovie = () => {
  const { handleSearchMovie, inputChange } = useContext(Context);
  return (
    <section className='container-search'>
      <div className='container-input'>
        <h2>
          <span className='text-info'>Info</span> dos Melhores Filmes.
        </h2>
        <input
          onChange={handleSearchMovie}
          className='input-search'
          placeholder='Buscar por nome'
        />
        {inputChange && <LinearProgress color='secondary' />}
      </div>
    </section>
  );
};

export default SearchMovie;
