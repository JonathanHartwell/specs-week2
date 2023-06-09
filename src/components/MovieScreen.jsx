import React from "react";
import MovieCard from "./MovieCard";

const MovieScreen = (props) => {
  const { watchList, page, setPage, movieList, addMovie, removeMovie} = props;

  const movieDisplay = movieList.map((movie, index) => {
    return <MovieCard movie={movie} addMovie={addMovie} removeMovie={removeMovie} watchList={watchList}/>;
  });

  const decrement = () => {
    if (page !==1){
        setPage(page - 1);
    } else {console.log('already on page 1')}
}
  const increment = () => {
    setPage(page +1);
}

  return (
    <div className="page">
      <h1>JonACinema</h1>
      <h3>Add a movie to your watch list</h3>
      <div className="btn-container">
        <button onClick={page !== 1 && decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
