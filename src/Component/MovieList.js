import React from "react";

export default function MovieList({ movieData, setMovieId }) {
  return (
    <ul className="list list-movies">
      {movieData.map((movie) => (
        <li onClick={() => setMovieId(movie.imdbID)}>
          <img src={movie.Poster} alt="movie" />
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>📅</span>
              <span>{movie.Year}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
