import React from "react";
import "./crad.css";


const imageUrl = "https://image.tmdb.org/t/p/original/";
const Card = ({ movie, handleOpen}) => {
  
  let posterUrl = imageUrl + movie.poster_path;
  return (
    <div
      className="card_container"
      style={{ backgroundImage: `url(${movie.poster_path != null ? posterUrl : "/poster-holder.jpg"})` }}
      onClick={() => handleOpen(movie)}
    >
      <div className="movie_title">{movie.title}</div>
      <div className="rating_circle">{movie.vote_average}</div>
    </div>
  );
};

export default Card;
