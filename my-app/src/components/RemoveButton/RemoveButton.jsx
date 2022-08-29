import './RemoveButton.css'

function RemoveButton(props){
    const removeMovie = (id) => () => {
        const updateMovieList = props.movieList.filter((movie) => movie.id !== id);
        updateMovieList.map((movie) => (movie.id = updateMovieList.indexOf(movie)));
        props.setMovieList(updateMovieList);
      };
return (
<div className='delete-button'>
<button id="close" onClick={removeMovie(props.movie.id)}>
  close
</button>
</div>
)
}

export default RemoveButton