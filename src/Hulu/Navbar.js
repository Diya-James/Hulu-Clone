import React from 'react'
import "./Navbar.css"
import requests from "./request"

function Navbar( {setselectedOPtion}) {
    return (
        <div className = "navbar">
            <h2 onClick={() =>
            setselectedOPtion(requests.fetchTrending)
            }>Trending</h2>  


            <h2 onClick={() =>
            setselectedOPtion(requests.fetchTopRated)
            }>Top Rated</h2>           
            
            
            <h2 onClick={() =>
            setselectedOPtion(requests.fetchActionMovies)
           }>Action</h2>

            <h2 onClick={() =>
            setselectedOPtion(requests.fetchComedyMovies)
            }>Comedy</h2>    
                   
            <h2
            onClick={() =>
                setselectedOPtion(requests.fetchHorrorMovies)
                }
            >Horror</h2>  

            <h2
            onClick={() =>
                setselectedOPtion(requests.fetchRomanceMovies)
                }
            >Romance</h2>    

            <h2
            onClick={() =>
                setselectedOPtion(requests.fetchSciFiMovies)
                }>Sci-fi</h2>   

            <h2 onClick={() =>
            setselectedOPtion(requests.fetchMysteryMovies)
            }>Mystery</h2>      

            <h2 onClick={() =>
            setselectedOPtion(requests.fetchWestern)
            }>Western</h2>     

            <h2 onClick={() =>
            setselectedOPtion(requests.fetchAnimation)
            }>Animation</h2>                  
        </div>
    )
}

export default Navbar
