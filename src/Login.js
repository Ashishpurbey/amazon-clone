import React,{useState} from 'react'
import './Login.css'
import {Link,useHistory} from 'react-router-dom';
import {auth } from './firebase'

const Login = () => { 
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] =   useState();
    
    const signIn = (e)=>{
        e.preventDefault();
        //some fancy firebase login !!!!!
        auth.signInWithEmailAndPassword(email,password)
            .then(auth=>{
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = (e)=>{
        e.preventDefault();
     
        //some fancy firebase register !!!!!
        auth.createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                //it is successfully created a new user with email and password
                if(auth){
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
          <Link to='/'>
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login_logo"/>
          </Link>

          <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} 
                        onChange={e=>setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

                    <button 
                        onClick={signIn}
                        type="submit"
                        className='login_signInButton'
                    >
                        Sing In
                    </button>
                </form>

                <p>
                    By signing-in you agree to the amazon Fake Clone
                     condition and privacy policy. Happy Shoping.
                </p>

                <button
                   onClick={register}
                    className='login_registerButton'
                > 
                    Create your amazon Account
                </button>

            </div>
            
        </div>

     
    )
}

export default Login
