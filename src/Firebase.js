import { initializeApp } from '@firebase/app';
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth } from "firebase/auth";
const firebaseConfig = {

    apiKey: "AIzaSyACakvl_b8DL7H0hWtf3NimCQ1V92yj5Hk",
  
    authDomain: "clone-f623e.firebaseapp.com",
  
    projectId: "clone-f623e",
  
    storageBucket: "clone-f623e.appspot.com",
  
    messagingSenderId: "883738026874",
  
    appId: "1:883738026874:web:c25a5b646d15ece02facc3",
  
    measurementId: "G-8VR1QEK06S"
  
  };
  const app  = initializeApp(firebaseConfig);

  //const firebaseApp = app.initializeApp()


export const db = getFirestore(app)
export  const auth = getAuth(app);

 