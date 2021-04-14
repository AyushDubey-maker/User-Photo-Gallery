import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import {  auth, provider } from '../firebase/config';
function Login() {
    function signIn(e){
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error)=>alert(error.message))

    }
    // eslint-disable-next-line
    return (
        <LoginContainer>
           <LoginInnerContainer>
               <h1>Sign In to Photo Gallery</h1>
               <p>Designed by Ayush Dubey</p>
               <Button  onClick={signIn}>Sign In with Google</Button>
               </LoginInnerContainer> 
        </LoginContainer>
    )
}

export default Login;
const LoginContainer=styled.div`
background-color:#f8f8f8;
height:100vh;
display:grid;
place-items:center;
`;
const LoginInnerContainer=styled.div`

padding:100px;
text-align:center;
background-color:white;
border-radius:10px;
box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);
>p{
  color:gray;
  font-style:italic;
}

>button{
    margin-top:50px;
    text-transform:inherit !important;
    background-color:#0a8d48 !important;
    color:white;
}
`;