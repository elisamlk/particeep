import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import { movies$ } from "./data/movies";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadFilms() {
      let data = await movies$;
      setMovies(data);
    }
    loadFilms();
  }, []);

  console.log(movies);

  return (
    <section className="card-display">
      {movies.map((movie) => {
        return (
          <Cards
            key={movie.id}
            id={movie.id}
            title={movie.title}
            cover={movie.cover}
          />
        );
      })}
    </section>
  );
}

export default App;
