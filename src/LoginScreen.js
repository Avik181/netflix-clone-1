import React, { useState } from 'react';
import styled from 'styled-components';
import SignInScreen from './SignInScreen';
function LoginScreen() {

    const [signIn, setSignIn]=useState(false);

    return (
        <Container>
            <Background>
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <button onClick={()=> setSignIn(true)}>Sign In</button>
                <Gradient></Gradient>
            </Background>
            <Body>
            {signIn ? (<SignInScreen />):
                <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere, Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to Create or restart your membership.</h3>
                <Input>
                    <form>
                        
                        <button onClick={()=> setSignIn(true)}> GET STARTED </button>
                    </form>

                    
                </Input>
              </>  
            }
            
            </Body>
        </Container>
    )
}

const Container = styled.div`
 position: relative;
 height: 100vh;
 
 background: url("https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png") center ;
 background-size: cover;
 background-repeat: no-repeat;
 overflow: hidden;
`

const Background = styled.div`
 img{
position: fixed;
left: 0;
width: 150px;
object-fit: contain;
padding-left: 20px;
 }

 button{
     position: fixed;
     right: 20px;
     top: 20px;
     padding: 10px 20px;
     font-size: 1rem;
     color: #fff;
     background-color: #e50914;
     border: none;
     cursor : pointer;
     
 }

 
`

const Gradient = styled.div`
 width: 100%;
 z-index: 1;
 height: 100vh;
 background: rgba(0,0,0,0.4);
 background-image: linear-gradient(
     to top,
     rgba(0,0,0,0.8) 0,
     rgba(0,0,0,0) 60%,
     rgba(0,0,0,0.8) 100%
 )
`

const Body = styled.div`
 z-index: 1;
 color: #fff;
 padding: 20px;
 width: 100vw;
 position: absolute;
 top: 30%;
 display: flex;
 flex-direction: column;
  align-items: center;
  justify-content: center;
 text-align: center;
 
 h1{
     
     font-size: 3.125rem;
     margin-bottom: 20px;
 }
 h2{
     font-size: 2rem;
     font-weight: 400;
     margin-bottom: 30px;
 }
 h3{
     font-size: 1.3rem;
     font-weight: 400;
 }
 button{
     padding: 16px 20px;
     font-size: 1rem;
     color: #fff;
     border: none;
     background-color: #e50914;
     font-weight: 600;
     cursor: pointer;
     
 }
 button:hover{
    
     background-color: grey;
     
 }
`
const Input = styled.div`
margin:20px;
form{
    width: 100vw;
    input{
        padding: 10px;
        outline-width: 0;
        height: 30px;
        width: 30%;
        border: none;
        max-width: 600px;
    }
    
}
 
`

export default LoginScreen
