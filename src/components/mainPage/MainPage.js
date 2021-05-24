import React, {useState,useEffect} from 'react'
import './MainPage.scss'
import background from "./images/background.jpg";
import MovieSelect from "../movieCard/MovieSelect"

import dataSet from "../../data/movies.json"


const image = 'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88997/93196/Avengers-Endgame-Final-Style-Poster-buy-original-movie-posters-at-starstills__42370.1563973516.jpg?c=2?imbypass=on'


function MainPage() {
    const [movies , setMovies] = useState([])

    const addMovie = (id)=>{
        setMovies((movies)=>[...movies,id])
    }
    const removeMovie = (id)=>{
        setMovies(
            movies.filter(item=>item!==id)
        )
    }
    const sendMovies = ()=>{
        //here put the code that send the movies to the modele and transfere to the next page
        console.log(`Button clicked, the user has choosed ${movies}`)
    }
    
    const listMovies = dataSet['movies'].map((movie)=>
        <MovieSelect removeMovie={removeMovie} addMovie={addMovie} id={movie.id} movie_info={movie} image={image} />
    )
    useEffect(() => {
        console.log(movies)
    },[movies])

    //       <div className="mainPage"  style={{ background: `url(${background}) , black`,backgroundSize: 'cover' }}>
    /*
                <MovieSelect removeMovie={removeMovie} addMovie={addMovie} id="1" movie_info={movie_info} image={image} />
                <MovieSelect removeMovie={removeMovie} addMovie={addMovie} id="2" movie_info={movie_info} image='https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217' />
                <MovieSelect removeMovie={removeMovie} addMovie={addMovie} id="3" movie_info={movie_info} image= 'https://cdn.shopify.com/s/files/1/0969/9128/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_a12704bd-2b25-4aa7-8c8d-8f40cf467dc7.jpg?v=1582781089'/>
                <MovieSelect removeMovie={removeMovie} addMovie={addMovie} id="4" movie_info={movie_info} image= 'https://cdn.seat42f.com/wp-content/uploads/2020/07/15192015/Project-Power-Movie-Poster-Jamie-Foxx.jpg'/>
                <MovieSelect removeMovie={removeMovie} addMovie={addMovie} id="5" movie_info={movie_info} image= 'https://cdn.shopify.com/s/files/1/0969/9128/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_a12704bd-2b25-4aa7-8c8d-8f40cf467dc7.jpg?v=1582781089'/>
                <MovieSelect removeMovie={removeMovie} addMovie={addMovie} id="6" movie_info={movie_info} image='https://cdn.seat42f.com/wp-content/uploads/2020/07/15192015/Project-Power-Movie-Poster-Jamie-Foxx.jpg' />
                <MovieSelect removeMovie={removeMovie} addMovie={addMovie} id="7" movie_info={movie_info} image={image} />
                <MovieSelect removeMovie={removeMovie} addMovie={addMovie} id="8" movie_info={movie_info} image='https://cdn.seat42f.com/wp-content/uploads/2020/07/15192015/Project-Power-Movie-Poster-Jamie-Foxx.jpg' />
                <MovieSelect removeMovie={removeMovie} addMovie={addMovie} id="9" movie_info={movie_info} image='https://cdn.shopify.com/s/files/1/0969/9128/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_a12704bd-2b25-4aa7-8c8d-8f40cf467dc7.jpg?v=1582781089' />
            
    */

    return (
        <div className="mainPage"> 
            <div className="mainPage__header">
                <button type="button" className = "mainPage__button" onClick={sendMovies}> RECOMMEND ME</button>
                <div className="mainPage__headerTitle">
                    <h2 className="mainPage__title">CHOOSE YOUR FAVORITE MOVIES FROM THE LIST</h2>
                    <h3 className="mainPage__sousTitle">AND WE WILL PROPOSE OTHER MOVIES FOR YOU</h3>
                </div>
                <button className = "mainPage__button" > Search bar here</button>
            </div>
            
            <div className="mainPage__cards">
                {listMovies}
                
            </div>
        </div>
    )
}

export default MainPage
