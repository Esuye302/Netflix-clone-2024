import React, { useEffect, useState } from 'react';
import './banner.css';
import axios from '../../utils/axios';
import requests from '../../utils/request';

const baseURL = 'https://image.tmdb.org/t/p/original';

// Helper function to truncate text
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

const Banner = () => {
    // Instead of initializing movie as an empty array,
    // we initialize it as null since we plan to store a single movie.
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log('Req', request)
            // Randomly select one movie from the results array:
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    return (
        <header
            className="banner"
            style={
                { backgroundImage: `url(${baseURL}${movie?.backdrop_path})`}
                } >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner_fadeBottom" />
        </header>
    );
};

export default Banner;
