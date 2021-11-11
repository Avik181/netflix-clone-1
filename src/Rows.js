import axios from './axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

function Rows({title, fetchUrl, isLargeRow = false}) {

    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <Container>
            <h2>{title}</h2>
            <div className="posters">
            {movies.map((movie) => (
                (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                    <img className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    key={movie.id}
                    src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} alt={movie.name} />
                    )
            )}
                    

                
            </div>
        </Container>
    )
}

const Container = styled.div`
 color: white;
 margin-left: 20px;
 

 .posters{
    display: flex;
 overflow-y: hidden;
 overflow-x: scroll;
 padding: 20px;
 }
 .posters {
  ::-webkit-scrollbar {
    width: 5px;
    height: 3px;
  }
  ::-webkit-scrollbar-track {
    background: #232b2b; 
  }
  ::-webkit-scrollbar-thumb {
    background: red; 
    width: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

  ::-webkit-scrollbar-track-piece:end {
  margin-right: 800px; 
}
 }
 .row_poster{
     max-height: 130px;
     object-fit: contain;
     margin-right: 10px;
     width: 100%;
     transition: transform 450ms;
 }

 .row_poster:hover{
     transform: scale(1.08);
     opacity: 1;
 }
 
 .row_posterLarge{
     max-height: 280px;
 }

 .row_posterLarge:hover{
    transform: scale(1.09);
     opacity: 1; 
 }
`

export default Rows
