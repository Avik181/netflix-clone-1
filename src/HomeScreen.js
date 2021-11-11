import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import Banner from './Banner';
import requests from './Request';
import Rows from './Rows';

function HomeScreen() {
    return (
        <Homescreen>
            <Navbar />
            <Banner /> 
            <Wrap>
            <Rows 
                title = 'Netflix Originals'
                fetchUrl = {requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Rows 
                title = 'Trending Now'
                fetchUrl = {requests.fetchTrending}
            />
            <Rows 
                title = 'Top Rated'
                fetchUrl = {requests.fetchTopRated}
            />
            <Rows 
                title = 'Action Movies'
                fetchUrl = {requests.fetchActionMovies}
            />
            <Rows 
                title = 'Comedy Movies'
                fetchUrl = {requests.fetchComedyMovies}
            />
            <Rows 
                title = 'Horror Movies'
                fetchUrl = {requests.fetchHorrorMovies}
            />
            <Rows 
                title = 'Romance Movies'
                fetchUrl = {requests.fetchRomanceMovies}
            />
            <Rows 
                title = 'Documentaries'
                fetchUrl = {requests.fetchDocumentaries}
            />

            </Wrap>
            
        </Homescreen>

        
    )
}

const Homescreen = styled.div`
width: auto;
height: auto;
background-color: #111;
overflow:auto;
`

const Wrap = styled.div`
`

export default HomeScreen
