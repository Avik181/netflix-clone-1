import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

function Navbar() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavbar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(()=>{
     window.addEventListener("scroll", transitionNavbar);
     return () => window.removeEventListener("scroll", transitionNavbar);
    },[])
    return (
        <Container className={` nav ${show && 'blak'}`}>
        <Wrap1>
            <img onClick={()=> history.push('/')} className="nav_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <img onClick={()=> history.push('/profile')} className="nav_av" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
        </Wrap1>
        </Container>
    )
}

const Container = styled.div`
 position: fixed;
 z-index: 100;
    .nav{
        top:0;
        padding: 15px;
        width: 100%;
        height: 30px;
        
        transition-timing-function: ease-in;
        transition: all 0.5s;
    }
    
.blak{
    background-color: #111;
}
 
`

const Wrap1 = styled.div`
 display: flex;
 justify-content: space-between;
 .nav_logo{
     position: fixed;
     top: 8px;
     left: 0;
     width: 80px;
     object-fit: contain;
     padding-left: 20px;
     cursor: pointer;
 }
 .nav_av{
     position: fixed;
     top: 8px;
     right: 20px;
     width: 30px;
     cursor: pointer;
 }
`

export default Navbar
