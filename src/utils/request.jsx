const APP_KEY = process.env.REACT_APP_APP_KEY
// https://api.themoviedb.org/3/discover/movie?api_key=c56e92b54a13cee41a0a95e30e45dffd&genres=28
const requests = {
    fetchTrending: `/trending/all/week?api_key=${APP_KEY}&language=en-US`,
    fetchNetflixOrginals: `/discover/tv?api_key=${APP_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APP_KEY}`,
    fetchActionMovie: `/discover/movie?api_key=${APP_KEY}&with_genres=28`,
    fetchComedyMovie: `/discover/movie?api_key=${APP_KEY}&with_genres=35`,
    fetchHorrorMovie: `/discover/movie?api_key=${APP_KEY}&with_genres=27`,
    fetchRomanceMovie: `/discover/movie?api_key=${APP_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APP_KEY}&with_genres=99`
};

export default requests;
