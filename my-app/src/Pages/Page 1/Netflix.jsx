import { useState } from "react";
import "./Netflix.css";
import Iframe from "../../components/MovieFrame/MovieFrame";
import AppHeader from "../../components/AppHeader/AppHeader";
import ListHeader from "../../components/ListHeader/ListHeader";
import Inputs from "../../components/Inputs/Input";
import MovieList from "../../components/MovieList/MovieList";

function Netflix() {
  const [movieList, setMovieList] = useState([]);
  const [addMovie, setAddMovie] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [inputImage, setInputImage] = useState("");
  const [inputTrailer, setInputTrailer] = useState("");
  const [trailerLink, setTrailerLink] = useState("");

  const addMovieToList = () => {
    setMovieList((movies) => [
      ...movies,
      {
        id: movieList.length,
        image: inputImage,
        title: inputTitle,
        trailer: inputTrailer,
      },
    ]);
  };
  return (
    <div className="Netflix">
      <div>
        <AppHeader />

        <button className="button" onClick={() => setAddMovie(!addMovie)}>
          Add New Movie
        </button>

        {addMovie && (
          <>
            <Inputs
              setInputTitle={setInputTitle}
              setInputImage={setInputImage}
              setInputTrailer={setInputTrailer}
            />
            <button className="button" onClick={addMovieToList}>
              Save
            </button>
          </>
        )}
      </div>

      <ListHeader />

      <ul>
        {movieList.map((movie, index) => (
          <MovieList key={index}
            inputImage={inputImage}
            inputTitle={inputTitle}
            inputTrailer={inputTrailer}
            movie={movie}
            movieList={movieList}
            setMovieList={setMovieList}
            setTrailerLink = {setTrailerLink}
          />
        ))}
      </ul>

      <Iframe trailerLink={trailerLink} />
    </div>
  );
}

export default Netflix;
