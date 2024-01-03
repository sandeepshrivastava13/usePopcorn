import React from "react";

const API_KEY = "138757a0";

function MovieDetail({ id }) {
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
  } = { ...singleMovieDetail };
  return (
    <div className="details">
      {isLoading ? (
        <p className="loader">Loading...</p>
      ) : (
        <>
          <header>
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
