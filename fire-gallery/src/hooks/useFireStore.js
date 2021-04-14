import {useState,useEffect} from 'react'

import {projectFirestore} from '../firebase/config'
import firebase from 'firebase'
const useFirestore=(collection)=> {
const [docs,setDocs]=useState([]);
const user=firebase.auth().currentUser
useEffect(()=>{
const unsub=projectFirestore.collection('images').doc(user?.uid).collection('user-images')
.onSnapshot((snap)=>{
        let documents=[];
        snap.forEach(doc=>{
            documents.push({...doc.data(),id:doc.id})
        });
        setDocs(documents);
    });
    return ()=>unsub();
},[collection,user])
    return {docs};
}

export default useFirestore;
//... is spread attribute use to easily pass on the complex data