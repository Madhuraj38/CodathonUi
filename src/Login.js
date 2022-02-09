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
      <section className='body'>
        <div className="header">
          <h1>Your Guide</h1>
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
          <form className="login" onSubmit={handlesubmit} >
            <label>Login Id</label>
            <input type="text" value={username} placeholder="username" onChange={(e)=>setUsername(e.target.value)} required/>
            <label>Password</label>
            <input type="password" value={pwd} placeholder="password" conChange={(e)=>setPwd(e.target.value)} required/><br/>
  
            <input className='btnContainer' type="submit" value="sign-in"/>
          </form>
          </section>
          )}
        </div>
      </section>
    );
}

export default Login;
