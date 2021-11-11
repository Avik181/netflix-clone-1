import axios from './axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import requests from './Request';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
      async function fetchData() {
          const request = await axios.get(requests.fetchActionMovies);
          setMovie(
              request.data.results[
                  Math.floor(Math.random() * request.data.results.length - 1)
              ]
          );
          return request;
      } 
      
      fetchData();
    }, []);

    console.log(movie);

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1)+"..." : string ;
    }
    
    return (
        <Container style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
            <Contents>
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_title}</h1>
                <Buttons>
                    <button>Play</button>
                    <button>My List</button>
                </Buttons>
                <h1 className="banner_desc">{truncate(movie.overview, 150)}</h1>
            </Contents>
            <FadeBottom></FadeBottom>
        </Container>
    )
}

const Container = styled.div`
 background-size: cover;
 position: relative;
 background-postion: "center center";
 height: 448px;
 color: white;
 
`

const Contents = styled.div`
 margin-left: 30px;
 padding-top: 140px;
 height: 190px;
 .banner_title{
     font-size:3rem;
     font-weight: 800;
     padding-bottom: 0.3rem;
 }

 .banner_desc{
     width: 45rem;
     line-height: 1.3;
     padding-top: 1rem;
     font-size: 0.8rem;
     max-width: 360px;
     height: 80px;
 }
`

const Buttons = styled.div`
button{
 color: #fff;
 outline: none;
 border: none;
 font-weight: 700;
 border-radius: 0.2vw;
 padding-left: 2rem;
 padding-right: 2rem;
 margin-right: 1rem;
 padding-top: 0.5rem;
 background-color: rgba(51, 51, 51, 0.5);
 padding-bottom: 0.5rem;
 cursor: pointer;
}
cursor: pointer;
button:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
    }
`

const FadeBottom = styled.div`
 height: 7.4rem;
 background-image: linear-gradient(
     180deg,
     transparent,
     rgba(37, 37, 37, 0.61),
     #111
 );
`

export default Banner
