import React, { useEffect, useState } from "react";
import Context from "./Context";
import Data from "../services/data";

const Provider = ({ children }) => {
  const [films, setFilms] = useState(null);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [headerColor, setHeaderColor] = useState(false);

  useEffect(() => {
    const getFilms = async () => {
      const listFilms = await Data.getListFilms();
      setFilms(listFilms);

      // Logica para gerar a capa do filme aleatoria
      const movieGenre = listFilms.filter((movie) => movie.title === "Ação");
      const moviePath = movieGenre.filter(
        (movie) => movie.backdrop_path !== null
      );
      const randomMovie = Math.floor(
        Math.random() * (moviePath[0].items.results.length - 1)
      );
      const movieOfTheTime = moviePath[0].items.results[randomMovie];
      setFeaturedMovie(movieOfTheTime);
    };

    getFilms();
  }, []);

  useEffect(() => {
    if (films) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [films]);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 100) {
        setHeaderColor(true);
      } else {
        setHeaderColor(false);
      }
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const INITIAL_VALUE = {
    films,
    featuredMovie,
    loading,
    headerColor,
  };

  return <Context.Provider value={INITIAL_VALUE}>{children}</Context.Provider>;
};

export default Provider;
