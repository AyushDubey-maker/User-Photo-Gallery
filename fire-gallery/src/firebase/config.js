import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyAtXE3mgfNyTPOrYiO1e0C7AmXYL9tyVds",
    authDomain: "fire-gallery-ec1c4.firebaseapp.com",
    projectId: "fire-gallery-ec1c4",
    storageBucket: "fire-gallery-ec1c4.appspot.com",
    messagingSenderId: "229135507821",
    appId: "1:229135507821:web:95983dde322b5ab075ba64"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timeStamp=firebase.firestore.FieldValue.serverTimestamp;

  export const auth = firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider();
  export {projectStorage,projectFirestore,timeStamp,provider};