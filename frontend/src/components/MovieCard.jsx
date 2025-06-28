import "../css/Moviecard.css"; // Assuming you have a CSS file for styling the MovieCard
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
    const { addToFavourites, removeFromFavourites, isFavourite } = useMovieContext();
    const favourite= isFavourite(movie.id);

    function onFavouriteClick(e) {
        e.preventDefault();
        if (favourite) removeFromFavourites(movie.id);
        else addToFavourites(movie);
    }


  return <div className="movie-card">
    <div className="movie-poster">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="movie-overlay">
        <button className={`favourite-btn ${favourite ? "active": ""}`} onClick={onFavouriteClick}>
            ❤
        </button>
      </div>
    <div  className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
    </div>
    </div>
  </div>
}

export default MovieCard