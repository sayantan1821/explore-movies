import React, { useEffect } from "react";
import Card from "../card/card";

const MovieList = ({ movieList, handleOpen }) => {
  useEffect(() => {}, [movieList]);
  return (
    <div className="movie_list">
      {movieList && movieList.map((movie, index) => {
        return <Card movie={movie} key={index} handleOpen={handleOpen} />;
      })}
    </div>
  );
};

export default MovieList;
