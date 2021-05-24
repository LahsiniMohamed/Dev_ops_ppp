import React from 'react'
import "./MovieBadge.scss"
import StarIcon from '@material-ui/icons/Star';

function MovieBadge({movie_info, ...props}) {
    const {title , description , rating , cast , director} = movie_info
    return (
        <div className = "movieBadge">
            <h3>{title}</h3>
            <p className = "movieBadge_desc">{description}</p>
            <div className="movieBadge__staff">
                <p className="movieBadge_stars">Cast : <span>{cast}</span></p>
                <p className="movieBadge_directors">Director : <span>{director}</span></p>
            </div>
            <div className="movieBadge__rating">
                <h4>{rating}<span>/10</span></h4>
                <StarIcon/>
            </div>
        </div>
    )
}

export default MovieBadge
