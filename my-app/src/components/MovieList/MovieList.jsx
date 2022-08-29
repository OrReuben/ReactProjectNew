import Counter from "../counter/counter";
import RemoveButton from "../../components/RemoveButton/RemoveButton";
import './MovieList.css'

function MovieList(props) {

  return (
    <li key={props.index}>
    <a href={props.movie.image} rel="noreferrer" target="_blank">
      {" "}
      <img className="movie-image" src={props.movie.image} alt="movieImage" />
    </a>
    <h1 onClick={() => props.setTrailerLink(props.movie.trailer)}>{props.movie.title}</h1>
    <div className="movie-rating">
      <Counter />
    </div>
    <RemoveButton 
    movieList = {props.movieList}
    setMovieList = {props.setMovieList}
    movie = {props.movie}
    />
  </li>
  );
}

export default MovieList