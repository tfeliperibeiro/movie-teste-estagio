import React, { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import Loading from "../../components/Loading";
import StarIcon from "@material-ui/icons/Star";
import "./Details.css";

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
          ({
            title,
            id,
            overview,
            backdrop_path,
            poster_path,
            vote_average,
          }) => (
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
              <div className='details-movie'>
                <img
                  alt={title}
                  src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                />
                <div className='text-details'>
                  <h2>{title}</h2>
                  <p>{overview}</p>
                  <section className='stars'>
                    <StarIcon htmlColor='#ffcb0c' />
                    <p className='vote'>{vote_average}</p>
                  </section>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href={`https://www.youtube.com/results?search_query=${title}`}
                  >
                    <button type='button' className='btn-trailer'>
                      Ver trailer
                    </button>
                  </a>
                </div>
              </div>
            </div>
          )
        )
      )}
    </>
  );
};

export default Details;
