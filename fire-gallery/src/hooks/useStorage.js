import {useState,useEffect} from 'react'
import {projectStorage,projectFirestore,timeStamp} from '../firebase/config'
import firebase from 'firebase'
const useStorage=(file)=>{
    const [progress,setProgress]=useState(0);
    const [error,setError]=useState(null)
    const [url,setUrl]=useState(null)
    const user=firebase.auth().currentUser
   
  useEffect(()=>{
     //References
     const storageRef=projectStorage.ref('users/'+user.uid+" "+file.name)
     const collectionRef=projectFirestore.collection('images').doc(user?.uid).collection('user-images');


     storageRef.put(file).on('state_changed',(snap)=>{
         let percentage=(snap.bytesTransferred/snap.totalBytes)*100;
         setProgress(percentage);
     },(err)=>{
         setError(err);
     },async()=>{
         const url=await storageRef.getDownloadURL();
         const createdAt=timeStamp();
         collectionRef.add({url,createdAt})
         setUrl(url);
     })
  },[file,user]);
  return{progress,url,error}
}
export default useStorage;