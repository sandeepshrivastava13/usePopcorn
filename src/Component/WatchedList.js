import React from "react";

const WatchedMovieList = ({ watched, handleDeleteWatched }) => {
  return (
    <ul className="list">
      {watched?.map((movie) => (
        <li>
          <img src={movie.Poster} alt="" />
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>⭐️</span>
              <span>{movie.imdbRating}</span>
            </p>
            <p>
              <span>🌟</span>
              <span>{movie.userRating}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>{movie.runtime} min</span>
            </p>
            <button
              className="btn-delete"
              onClick={() => handleDeleteWatched(movie.imdbID)}
            >
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default WatchedMovieList;
