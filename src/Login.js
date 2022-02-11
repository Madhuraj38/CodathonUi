import React,{useState} from 'react';
import axios from 'axios';
import './Mystyles.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import Menubar from './Menubar.js';
import {App} from './App';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export var token;
function Login() {
    
    let navigate=useNavigate();
    const [username,setUsername]=useState("");
    const [pwd,setPwd]=useState("");
    const [cpwd,setCpwd]=useState("");
    const [status,setStatus]=useState(0);
    const handlesubmit=(e)=>{
      e.preventDefault();
      //alert("your name:"+username);
      //(cpwd!==pwd)?alert("entered wrong password"):alert("correct");
      //console.log(username);
      //console.log(pwd);
      setCpwd();
      axios({
        url: "http://localhost:5000/register",
        method: "POST",
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: {
          
          "username": username,
          "password": pwd
        }
      }).then((res) => {
        const data = res.data;
        console.log(data);
        if(data.status === 200){
          console.log("Successfully signup");
  
        } else{
          alert("Failed to signup:\nEnter email in correct format and password with atleast 6 characters");
        }
        // alert(res);
      }).catch((err)=>{
      alert(err);
      console.log(err);
    }); 
    }
    const handlesubmit1 = (e) => {
      e.preventDefault();
      // alert("your name:" + username);
      axios({
        url: "http://localhost:5000/login",
        method: "POST",
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: {
          "username": username,
          "password": pwd
        }
      }).then((res) => {
        const data = res.data;
        token=data.accessToken;
        console.log(data);
        console.log(typeof(data));
        if(data.status === 200){
          //App({token});
          navigate('/Menubar');
          //<Link to='/Menubar'><span>Menubar</span></Link>
          //<Link to={{pathname: "/Menubar/",data: token}}></Link>
          console.log("Successfully Login");
          
        } else{
          alert("Error:Enter email in correct format and password with atleast 6 characters");
        }
        // alert(res);
      }).catch((err)=>{
      alert(err);
      console.log(err);
    }); 
    }

    return (
      <section className='body'>
        <div className="header">
          <h1>Your Guide</h1>
          <Link to='/Menubar'></Link>
        </div>
        <div className="container">
          <div className='tabs'>
            <span className='tabs-active'><span className='tab-left' onClick={()=>setStatus(0)}>Log in</span><span className='tab-right' onClick={()=>setStatus(1)}>Sign up</span></span>
          </div>
          {status?(
            <section className='form'>
            <form className="login" onSubmit={handlesubmit} >
              
              <label>Login Id</label>
              <input type="text" value={username} placeholder="username" onChange={(e)=>setUsername(e.target.value)} required/>
              <label>Password</label>
              <input type="password" value={pwd} placeholder="password" onChange={(e)=>setPwd(e.target.value)} required/>
              <label> Confirm Password</label>
              <input type="password" value={cpwd} placeholder="password" onChange={(e)=>setCpwd(e.target.value)} required/><br/>
              <input className='btnContainer' type="submit" value="sign-up"/>
            </form>
            </section>
          ):
          (
            <section className='form'>
          <form className="login"  onSubmit={handlesubmit1} >
            <label>Login Id</label>
            <input type="text" value={username} placeholder="username" onChange={(e)=>setUsername(e.target.value)} required/>
            <label>Password</label>
            <input type="password" value={pwd} placeholder="password" onChange={(e)=>setPwd(e.target.value)} required/><br/>
  
            <input className='btnContainer' type="submit" value="sign-in"/>
          </form>
          </section>
          )}
        </div>
      </section>
    );
}

export default Login;
