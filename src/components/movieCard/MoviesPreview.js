import React from 'react'
import MovieCard from './MovieCard'
import './MoviesPreview.scss'

const movie_info = {
    name : 'Avanger',
    description : 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos  qsdqsdqsd qsd qsd qsdqs dazd qsdz',
    rating : '5',
    stars : 'Robert Downey Jr., Chris Evans qdqsdzaaeqsdqsdz azd zdq sdaz sqdqzda dqsdaz qsdaza ...',
    directors : 'Anthony Russo, Joe Russdqsdq azd qsda z sd qda qsdqzdad qsdzd s qsd qsd qsdqsdqsd qd qsd qds qsdq sdqd qsd qs dq sdso',
    }


function MoviesPreview() {
    return (
        <div className = 'MoviesPreview'>
            <MovieCard movie_info= {movie_info} image = 'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88997/93196/Avengers-Endgame-Final-Style-Poster-buy-original-movie-posters-at-starstills__42370.1563973516.jpg?c=2?imbypass=on'/>
            <MovieCard movie_info= {movie_info} image = 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217'/>
            <MovieCard movie_info= {movie_info} image = 'https://cdn.shopify.com/s/files/1/0969/9128/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_a12704bd-2b25-4aa7-8c8d-8f40cf467dc7.jpg?v=1582781089'/>
            <MovieCard movie_info= {movie_info} image = 'https://cdn.seat42f.com/wp-content/uploads/2020/07/15192015/Project-Power-Movie-Poster-Jamie-Foxx.jpg'/>
            <MovieCard movie_info= {movie_info} image = 'https://cdn.shopify.com/s/files/1/0969/9128/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_a12704bd-2b25-4aa7-8c8d-8f40cf467dc7.jpg?v=1582781089'/>
            <MovieCard movie_info= {movie_info} image = 'https://cdn.seat42f.com/wp-content/uploads/2020/07/15192015/Project-Power-Movie-Poster-Jamie-Foxx.jpg'/>
        
        </div>
    )
}

export default MoviesPreview
