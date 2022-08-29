import { useState } from "react"
import './counter.css'


function Counter(){
    const [likes, setLikes] = useState(0)
    // const [likesActive, setLikesActive] = (false)

    // const [dislikes, setDislikes] = useState(0)
    // const [dislikesActive, setDislikesActive] = (false)

    // const likedButton = () => {
    //     if(setLikesActive)(
    //         setLikes(likes+1)
    //         )
    //     }
    
    

    return (
        <div className="movie-rating">
<p onClick={() => setLikes(likes === 0 || likes=== -1 ? likes+1 : likes-1)} className="add-one">👍</p>
<p className="rating-number"> {likes}</p>
<p onClick={() => setLikes(likes === 1 | likes===0 ? likes-1 : likes+1)} className="substract-one">👎</p>
</div>
    )
}

export default Counter