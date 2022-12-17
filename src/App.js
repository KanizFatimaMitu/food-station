import './App.css';
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import PhoneAuth from './PhoneAuth/PhoneAuth';
import { useEffect, useState } from 'react';
import {onAuthStateChanged} from 'firebase/auth';

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCp1hyKHVme59IUpJg_tQgqr-CbiXSF-h4",
    authDomain: "food-station-983d2.firebaseapp.com",
    projectId: "food-station-983d2",
    storageBucket: "food-station-983d2.appspot.com",
    messagingSenderId: "798393818239",
    appId: "1:798393818239:web:f208f7dae036966513734a"
  };

  firebase.initializeApp(firebaseConfig);

  const [user, setUser] = useState(null);
  useEffect(() => {
    const unRegistered = onAuthStateChanged(firebase.auth(), (currentUser)=>{
      console.log(currentUser);
      setUser(currentUser);
    })
    return () => unRegistered();
  })

  return (
    <div className="App">
      <PhoneAuth auth={firebase.auth()}></PhoneAuth>
    </div>
  );
}

export default App;
