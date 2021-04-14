import { Button } from '@material-ui/core';
import React from 'react';
import { auth } from '../firebase/config';
import firebase from 'firebase'
function Title(){
    const user=firebase.auth().currentUser
    return(
        <div className="title">
            <h1>Fire Gallery    <Button style={{textTransform:'inherit'}} color="secondary" variant="contained" onClick={()=>auth.signOut()}>Logout</Button></h1>
            <h2>{user?.displayName} Gallery</h2>
            <p>Below are the images from your Gallery. You can also add more images.</p>

        </div>
    )
}

export default Title;