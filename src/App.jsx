import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import MovieList from "./Component/MovieList";
import { moviesData } from "./Data";
import AddMovie from "./Component/AddMovie";
import FilterMovie from "./Component/FilterMovie";

const App = () => {
  const [movies, setMovies] = useState(moviesData);

  const [filterTitle, setFilterTitle] = useState("");

  const [filterRate, setFilterRate] = useState(0);

  const add = (newMovie) => {
    setMovies([newMovie, ...movies]);
  };
  return (
    <div>
      <NavBar />
      <div className="flex flex-col md:flex-row gap-3 items-center justify-between px-24">
        <AddMovie add={add} />
        <FilterMovie
          filterTitle={filterTitle}
          setFilterTitle={setFilterTitle}
          filterRate={filterRate}
          setFilterRate={setFilterRate}
        />
      </div>
      <MovieList movies={movies} filterTitle={filterTitle} filterRate={filterRate} />
      <Footer />
    </div>
  );
};

export default App;
