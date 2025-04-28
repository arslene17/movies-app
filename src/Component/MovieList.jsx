import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, filterTitle, filterRate }) => {
  return (
    <div className="flex flex-wrap justify-center my-5 gap-12">
      {filterTitle
        ? movies
            .filter((movie) =>
              movie.title
                .toLowerCase()
                .includes(filterTitle.toLowerCase().trim())
            )
            .map((movie) => <MovieCard movie={movie} key={movie.id} />)
        : filterRate
        ? movies
            .filter((movie) => movie.rate === filterRate)
            .map((movie) => <MovieCard movie={movie} key={movie.id} />)
        : movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
    </div>
  );
};

export default MovieList;
