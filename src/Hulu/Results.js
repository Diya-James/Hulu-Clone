
import React , { useEffect , useState}  from 'react'
import "./Results.css"
import VideoCard from "./VideoCard"
import axios from "./axios"
import FlipMove from "react-flip-move"
import requests from "./request"



function Results({selectedOption}) {
    const [movies, setmovies] = useState(["11" , ""  , "" , "" ]);
    useEffect(() => {

        async function fetchData()
        {
            const request = await axios.get(selectedOption);
            console.log(request);
            setmovies(request.data.results);
            return request;
        }

        fetchData();
    }, [selectedOption])
    
    return (

        <div className="results">

        <FlipMove>
            {movies.map((movie) => (<VideoCard key={movie.id} movie = {movie}/>))}
        </FlipMove>
            


        </div>
    );
}

export default Results;
