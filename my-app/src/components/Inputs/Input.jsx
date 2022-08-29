import './Input.css'



function Inputs(props){

    return(
<div className="buttons-and-inputs-container">
            <div className="input-container">
              <p>Title:</p>
              <input
                type="text"
                placeholder="Place your title here..."
                onChange={(e) => props.setInputTitle(e.target.value)}
              />
              <p>Image URL:</p>
              <input
                type="url"
                placeholder="Place your picture url here..."
                onChange={(e) => props.setInputImage(e.target.value)}
              />
              <p>Trailer Embed URL:</p>
              <input
                type="url"
                placeholder="Place your movie url here..."
                onChange={(e) => props.setInputTrailer(e.target.value)}
              />
            </div>
          </div>
    )
}

export default Inputs