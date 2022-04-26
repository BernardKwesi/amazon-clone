import './App.css';
import Header from './Header.js'
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import {useEffect} from 'react';
import {auth} from './Firebase';
import {  onAuthStateChanged } from "firebase/auth";
import {useStateValue} from './StateProvider';


function App() {
  
  const [{} ,dispatch ] = useStateValue();
  useEffect(()=> {

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
   dispatch({
     type : 'SET_USER',
     user : user , 
   })
   console.log("User Email >>> ",user.email)
    const uid = user.uid;
    // User just logged in / user was already logged in
  } else {
    dispatch({
      type : 'SET_USER',
      user : null , 
    })
  }
});

  },[dispatch])
  return (
    
    <div className="App">
      <Router>
      
        <Routes>
          <Route path="/checkout" element={<div>
            <Header /> 
            <Checkout  /> </div>} />
          
            <Route path="/login" element={<div> 
              
            <Login /> </div>} />
           

        
          <Route path="/" element={<div>
            <Header />
            <Home /></div>} />
            
         
        </Routes>
      </Router>
    </div>

   
  );
}

export default App;
