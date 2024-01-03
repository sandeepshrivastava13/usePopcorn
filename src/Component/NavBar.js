import React from "react";

function NavBar(props) {
  const [query, setQuery] = React.useState("");

  function getQuery(e) {
    setQuery(e.target.value);
    props.setMovieQuery(query);
  }

  return (
    <div className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input
        type="text"
        placeholder="Search movie"
        className="search"
        value={query}
        onChange={(e) => getQuery(e)}
        autoFocus
      />
      <p className="num-results">Found {props.result} results</p>
    </div>
  );
}

export default NavBar;
