import React, { useState, useEffect } from 'react'
import '../Row/row.css'
import axios from '../../../utils/axios'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'
const base_url = 'https://image.tmdb.org/t/p/original';
const Row = ({ title, fetchUrl, isLarge }) => {
    const [movies, setmovies] = useState([]);
    const [trailerUrl, setTrailer] = useState('')
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            //axios.get👉*https://api.themoviedb.org/3
            //fetchUrl 👉/discover/movie?api_key=${APP_KEY}
            //https://api.themoviedb.org/3/discover/movie?api_key=${APP_KEY}
            setmovies(request.data.results)
        }

        fetchData()
    }, [fetchUrl]);
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailer('')
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.orginal_name)
                .then((url) => {
                    console.log('url', url)
                    const urlParams = new URLSearchParams(new URL(url).search)
                    console.log('urlParams', urlParams)
                    console.log('urlParams get v', urlParams.get('v'))
                    setTrailer(urlParams.get('v'))
                })
        }
    }
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };
    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className="movie-row">
                {movies?.map((movie) => (
                    <img
                        onClick={() => handleClick(movie)}
                        key={movie.id}
                        className={`movie-poster ${isLarge ? 'large' : ''}`}
                        src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.title || movie.name || 'Movie Poster'}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

        </div>
    );

}

export default Row
