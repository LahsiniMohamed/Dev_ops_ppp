import React  from 'react'
import "./MovieCard.scss"
import MovieBadge from "./MovieBadge"


function MovieCard({movie_info, image, ...props}) {
    /*const {name , description , rating , stars , directors} = movie_info ;*/

    return (
        <div className = 'movieCard'>
            <MovieBadge movie_info={movie_info} />
            <img src={image} alt="movie_image" />
        </div>
    )
}

export default MovieCard
