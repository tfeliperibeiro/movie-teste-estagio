import React, { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import Loading from "../../components/Loading";

const Details = ({
  match: {
    params: { id, title },
  },
}) => {
  const { films } = useContext(Context);
  const [filmDetail, setFilmDetail] = useState(null);

  useEffect(() => {
    const handleFilterMovieById = () => {
      if (films) {
        const genreMovie = films.filter((movie) => movie.title === title);
        const results = genreMovie.map((movie) => movie.items.results);
        const filmDetail =
          results &&
          results.map((movie) =>
            movie.filter((movieId) => movieId.id === Number(id))
          );
        setFilmDetail(filmDetail[0]);
      }
    };
    handleFilterMovieById();
  }, [films, title, id]);

  return (
    <>
      {!filmDetail ? (
        <Loading />
      ) : (
        filmDetail.map(
          ({ title, id, overview, backdrop_path, poster_path }) => (
            <div className='container-details' key={id}>
              <section
                className='featured'
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
                  opacity: "0.3",
                }}
              >
                <div className='featured-vertical' />
              </section>
              <div>
                <img
                  alt={title}
                  src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                />
                <h2>{title}</h2>
                <p>{overview}</p>
              </div>
            </div>
          )
        )
      )}
    </>
  );
};

export default Details;
