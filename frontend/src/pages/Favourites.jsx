import "../css/Favourites.css"; // Assuming you have a CSS file for styling the Favourites page
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";


function Favourites() {
  const {favourites} = useMovieContext();

  if (favourites) {
    return (
      <div className="favourites">
        <h2>Your Favourites</h2>
         <div className="movie-grid">
                {favourites.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
            ))}
    
          </div>
      </div> 
    )
  }
  return (
    <div className="favourites-empty">
      <h2> No Favourites</h2>
      <p className="text-gray-600">You have no favourites yet.</p>
    </div>
  );
}
export default Favourites;