import React from "react";

import "./SearchMovie.css";

const SearchMovie = () => (
  <section className='container-search'>
    <div className='container-input'>
      <h2>
        <span className='text-info'>Info</span> dos Melhores Filmes.
      </h2>
      <input className='input-search' placeholder='Buscar por nome' />
    </div>
  </section>
);

export default SearchMovie;
