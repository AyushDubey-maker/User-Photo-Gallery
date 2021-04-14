import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import Login from './components/Login';
import HomePage from './components/HomePage';
import { auth } from './firebase/config';
function App() {
  const [user]=useAuthState(auth)
  return (
    <div >
      {!user?(
       <Login/>
      ):(
       <HomePage/>
      )}
    
  </div>
  );
}

export default App;
