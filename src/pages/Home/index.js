import React, { useContext } from "react";
import FeaturedMovie from "../../components/FeaturedMovie";
import ListFilms from "../../components/ListFilms";
import Context from "../../context/Context";
import Loading from "../../components/Loading";
import Header from "../../components/Header";

const Home = () => {
  const { films, featuredMovie, loading } = useContext(Context);
  return (
    <main>
      <Header />
      {loading && <Loading />}
      {featuredMovie && <FeaturedMovie item={featuredMovie} />}
      <div className='page'>
        <section className='lists'>
          {films &&
            films.map((values) => (
              <ListFilms
                key={values.title}
                title={values.title}
                items={values.items}
              />
            ))}
        </section>
      </div>
    </main>
  );
};

export default Home;
