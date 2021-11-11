import React, { useRef } from 'react';
import styled from 'styled-components';
import {auth} from './firebase';


function SignInScreen() {

    const emailRef = useRef(null);
    const passRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch(error => {
            alert(error.message);
        });
    };

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch(error => {
            alert(error.message);
        });  
    }; 

    return (
        <Container>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passRef} placeholder="Password" type="password" />
            <button type="submit" onClick={signIn}>Sign In</button>
            <h4><span className="grey">New to Netflix?</span> 
            <span className="link" onClick={register}>Sign Up now.</span></h4>
        </form>
        </Container>
    )
}

const Container = styled.div`
 max-width: 300px;
 padding: 70px;
 
 background: rgba(0,0,0,0.6);

 form{
     display: grid;
     flex-direction: column;
     width: 16vw;
     margin-left: auto;
     margin-right: auto;
     h1{
         text-align: left;
         margin-bottom: 25px;
     }
     h4{
        text-align: left;
        margin-top: 30px;

        .grey{
            color: gray;
        }
        .link: hover{
            cursor: pointer;
            text-decoration: underline;
        }
     }
     input{
         outlin-width: 0;
         height: 40px;
         margin-bottom: 14px;
         border-radius: 5px;
         border: none;
         padding: 5px 15px;
     }
     button{
         padding: 16px 20px;
         font-size: 1rem;
         color: #fff;
         border-radius: 5px;
         font-weight: 600;
         border: none;
         cursor: pointer;
         margin-top: 20px;

     }
 }
`

export default SignInScreen
