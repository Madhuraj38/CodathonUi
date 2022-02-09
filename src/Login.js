import React,{useState} from 'react';
import './Mystyles.css';
function Login() {
    const [username,setUsername]=useState("");
    const [pwd,setPwd]=useState();
    const [cpwd,setCpwd]=useState();
    const [status,setStatus]=useState(0);
    const handlesubmit=(e)=>{
      e.preventDefault();
      alert("your name:"+username);
      (cpwd!==pwd)?alert("entered wrong password"):alert("correct");
    }
    return (
      <>
        <div className="header">
          <h1>YOUR GUIDE</h1>
        </div>
        <div className="container">
          <div className='tabs'>
            <p><button onClick={()=>setStatus(0)}>Log in</button> | <button onClick={()=>setStatus(1)}>Sign up</button></p>
          </div>
          {status?(
            <>
            <form className="signup-form" onSubmit={handlesubmit} >
              
              <label>Login Id</label><br/>
              <input type="text" value={username} placeholder="username" onChange={(e)=>setUsername(e.target.value)} required/><br/>
              <label>Password</label><br/>
              <input type="password" value={pwd} placeholder="password" onChange={(e)=>setPwd(e.target.value)} required/><br/>
              <label> Confirm Password</label><br/>
              <input type="password" value={cpwd} placeholder="password" onChange={(e)=>setCpwd(e.target.value)} required/><br/>
              <input type="submit" value="sign-up"/>
            </form>
            </>
          ):
          (
            <>
          <form className="login-form" onSubmit={handlesubmit} >
            <div className='username'>
            <label>Login Id</label>
            <input type="text" value={username} placeholder="username" onChange={(e)=>setUsername(e.target.value)} required/>
            </div>
            <div className='Password'>
            <label>Password</label>
            <input type="password" value={pwd} placeholder="password" conChange={(e)=>setPwd(e.target.value)} required/>
            </div>
            <input type="submit" value="sign-in"/>
          </form>
          </>
          )}
        </div>
      </>
    );
}

export default Login;
