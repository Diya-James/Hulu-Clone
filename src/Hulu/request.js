const API_KEY = "6d13f6bb623950e4d6ec730ab7bf55ff"; 

export default
{
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&lanaguage=en-US `,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&lanaguage=en-US` ,
    // fetchActionMovies : `/discover/movie? api_key=${API_KEY}&with_genres=28` ,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28` ,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=35` ,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=27` ,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=10749` ,
    fetchMysteryMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=9648` ,
    fetchSciFiMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=878` ,
    fetchWestern : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=37` ,
    fetchAnimation : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=16` ,
    fetchTV : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=10770` ,
}