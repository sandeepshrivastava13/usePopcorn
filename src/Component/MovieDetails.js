import React from "react";

const API_KEY = "138757a0";

function MovieDetail({ id, handleCloseMovie, handleAddWatched, watched }) {
  const [singleMovieDetail, setSingleMovieDetail] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
        );
        const data = await res.json();
        setSingleMovieDetail(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [id]
  );
  const {
    Poster: poster,
    Plot: plot,
    Title: title,
    Genre,
    Actors,
    Director,
    Runtime,
    imdbRating,
    Released,
    Year,
  } = { ...singleMovieDetail };

  React.useEffect(
    function () {
      document.title = `MOVIE | ${title}`;
      return function () {
        document.title = "usePopcorn";
      };
    },
    [title]
  );

  function onHandleAddWatched() {
    const newWatchedMovie = {
      Title: title,
      Poster: poster,
      imdbID: id,
      Year,
      imdbRating: Number(imdbRating),
      Released,
      runtime: Number(Runtime.split(" ").at(0)),
    };
    handleAddWatched(newWatchedMovie);
    handleCloseMovie();
  }

  const isWatched = watched.map((movie) => movie.imdbID).includes(id);

  return (
    <div className="details">
      {isLoading ? (
        <p className="loader">Loading...</p>
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={() => handleCloseMovie()}>
              &larr;
            </button>
            <img src={poster} alt="movie" className="img" />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {Released} &bull; {Runtime}
              </p>
              <p>{Genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDB Rating
              </p>
            </div>
          </header>
          <div className="rating">
            {isWatched ? (
              <p>This content is already watched</p>
            ) : (
              <button className="btn-add" onClick={() => onHandleAddWatched()}>
                Add to list
              </button>
            )}
          </div>
          <section>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {Actors}</p>
            <p>Directed by {Director}</p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetail;
