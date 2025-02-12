import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/request'
const RowList = () => {
    return (
        <>
            <Row title="NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOriginals} isLarge/>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovie} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovie} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovie} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </>
    )
}

export default RowList