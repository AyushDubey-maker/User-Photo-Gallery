import React from "react";
import { motion } from 'framer-motion';

// import firebase from 'firebase'

const Modal = ({ setSelectedImg, selectedImg }) => {
    //const user=firebase.auth().currentUser
    const handleClick = (e) => {
      if (e.target.classList.contains('backdrop')) {
        setSelectedImg(null);
      }
    }
    

    return (
      
      <motion.div className="backdrop" onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
       
        <motion.img src={selectedImg} alt="enlarged pic" 
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          />
       
      
      </motion.div>
  
   
    )
  }
  
  export default Modal;