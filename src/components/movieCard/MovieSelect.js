import React, {useState,useEffect} from 'react'
import './MovieSelect.scss'
import MovieCard from './MovieCard'
import selectImage from './images/sssAsset.png'

function MovieSelect({movie_info,image,...props}) {
    const [selected,setSelected] = useState(false)

    const selectCard = (e)=>{
        setSelected((selected)=>!selected)
    }
    return (
        <div className="movieSelect" onClick={selectCard}>
            <img src={selectImage} alt="selected badge" className={`movieSelect__image ${selected? 'selected' : ''}`}/>
            <MovieCard className="movieSelect__movieCard" movie_info={movie_info} image = {image} />
        </div>
    )
}

export default MovieSelect
