import React,{useState} from 'react'
import './Login.css'
import {Link , useNavigate} from 'react-router-dom'
import {auth, db} from './Firebase.js'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
function Login() {
const [email, setEmail] = useState('')
const [password , setPassword] = useState('')
const navigate = useNavigate()


const signIn =(e)=>{
  e.preventDefault()
   
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    if(auth){
      navigate('/')
      }

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


}

const register= (e) =>{
  e.preventDefault();


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    
    if(auth){
    navigate('/')
    }
 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });

}

  return (
    <div className="login">
        <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login__image"/>
        </Link>
        <div className="login__container">
            <h1>Sign In</h1>
            <form >
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} required/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                <button onClick={signIn} type="submit" className="login__signInButton">Sign In</button>

            </form>
            <p>
                By Signing-in you agree to the Conditions 
            </p>
            <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
        </div>
        
   
    </div>
  )
}

export default Login 