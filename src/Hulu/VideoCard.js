import React , {forwardRef} from 'react'
import "./VideoCard.css"
import TextTruncate from "react-text-truncate"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const base_url = "https://image.tmdb.org/t/p/original/";

const  VideoCard = forwardRef(({movie} , ref)  => {
    return (
        <div ref={ref} className = "videocard">
            <img src= {`${base_url}${movie.backdrop_path || movie.poster_path }`} alt = "Movie" />
            {/* <img src= "https://image.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-586719869.jpg" alt = "Movie" /> */}
            <TextTruncate
            line={1}
            element = "p"
            truncateTeaxt="..."
            text={movie.overview}
            />
            <h2>{movie.title || movie.original_name}</h2>
            <p>{movie.release_date|| movie.first_air_date}</p>

            <p className="videoCard_stats"><ThumbUpIcon/> {movie.vote_count}</p>
        </div>
    )
})

export default VideoCard
