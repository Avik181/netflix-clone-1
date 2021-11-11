import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUser } from './features/counter/userSlice';
import { auth } from './firebase';
import Navbar from './Navbar';

function ProfileScreen() {

    const user = useSelector(selectUser);

    return (
        <Container>
            <Navbar />
            <Body>
                <h1>Your Profile</h1> 
                <Info>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                    <Details>
                        <h2>{user.email}</h2>
                        <button onClick={()=> auth.signOut()} >Sign Out</button>
                    </Details>
                    <Plans>
                        
                    </Plans>
                </Info>
            </Body>
        </Container>
    )
}

const Container = styled.div`
 height: 100vh;
 color: white;
 background-color: black;
`

const Body = styled.div`
 padding-top: 10%;
 display: flex;
 flex-direction: column;
 width: 50%;
 margin-left: auto;
 margin-right: auto;
 max-width: 800px;

 h1{
     font-size: 60px;
     font-weight: 400;
     border-bottom: 1px solid #282c2d;
     margin-bottom: 20px;
 }
`

const Info = styled.div`
 display: flex;
 img{
     height: 100px;
 }
`

const Details = styled.div`
 color: white;
 margin-left: 25px;
 flex:1;

 h2{
     background-color: grey;
     padding: 15px;
     font-size: 15px;
     padding-left: 20px;
 }

 button{
     padding: 10px 20px;
     font-size: 1rem;
     margin-top: 5%;
     width: 100%;
     color: #fff;
     background-color: #e50914;
     font-weight: 600;
     border: none;
     cursor : pointer;
 }
 
`
const Plans = styled.div`

`

export default ProfileScreen
