import Title from "./comps/Title.js"
import UploadForm from './comps/UploadForm.js'
import ImageGrid from './comps/ImageGrid'
import Modal from "./comps/Modal"
import React,{useState} from 'react'
// import Signup from "./components/Signup"
// import { Container } from "react-bootstrap"
// import { AuthProvider } from "./contexts/AuthContext"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// import Login from "./components/Login"
// import PrivateRoute from "./components/PrivateRoute"
// import ForgotPassword from "./components/ForgotPassword"


function App() {
  const [selectedImg,setSelectedImg]= useState(null);
  return (
    <div className="App">
    <Title/>
    <UploadForm />
    <ImageGrid setSelectedImg={setSelectedImg} />
    { selectedImg && (
      <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
  </div>
  );
}

export default App;
