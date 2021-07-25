import React, { useContext } from 'react';
import ListFilms from '../components/ListFilms';
import Context from '../context/Context';

const Home = () => {
  const { films } = useContext(Context);
  return (
    <main>
      <div className="page">
        <section className="lists">
          {films && films.map((values) => (
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
