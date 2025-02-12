const APP_KEY = import.meta.env.VITE_APP_KEY;


const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${APP_KEY}&with_networks=213`,
    fetchTrending: `/trending/all/week?api_key=${APP_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${APP_KEY}`,
    fetchActionMovie: `/discover/movie?api_key=${APP_KEY}&with_genres=28`,
    fetchComedyMovie: `/discover/movie?api_key=${APP_KEY}&with_genres=35`,
    fetchHorrorMovie: `/discover/movie?api_key=${APP_KEY}&with_genres=27`,
    fetchRomanceMovie: `/discover/movie?api_key=${APP_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APP_KEY}&with_genres=99`
};

export default requests;
