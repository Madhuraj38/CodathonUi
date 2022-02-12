import React,{useEffect, useState} from 'react';
import * as FaICons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Menubar.css';
import axios from 'axios';
import {token} from './Login';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
//import { render } from '@testing-library/react';

function Menubar() {
    let navigate=useNavigate();
    console.log(token);
    return(
        <>
        <div className='header'>
            <h1>Your Guide</h1>
            <Link to='/' className='logout'>
                <AiIcons.AiOutlineLogout onClick={navigate('/')} />
            </Link>
        </div>
        <Menuleftbar/>
        
        </>
    );
}
function Menuleftbar(){
    
    const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
  //const [state,setState]=useState(res.data);
  //let placements,competitions;//,ebooks,tutorials;
  //placements
  //competitions
  //ebooks
  //tutorials 
  const [state,setState]=useState({
    array:[<Menurightbar/>,<MenuCompet/>,<Menutut/>,<Menuebook/>],
    count:2,
    
  });

  return (
    
      <>
        <div className='left'>
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
        <div className='menu'>
                <FaICons.FaBars onClick={showSidebar} />
            </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-list' onClick={showSidebar}>
            <li className='navbar-toggle'>
            <div  className='menu'>
                <FaICons.FaBars onClick={showSidebar} />
            </div>
            </li>
                <li className='nav-text'>
                        <button onClick={setState({count:0})} >Placements</button>
                    
                </li>
                <li className='nav-text'>
                    
                <button onClick={setState({count:1})} >Competitions</button>
                    
                </li>
                <li className='nav-text'>
                    
                <button onClick={setState({count:3})}>Ebook</button>
                    
                </li>
                <li className='nav-text'>
                <button onClick={setState({count:2})}>Tutorials</button>
                </li>
                <li className='nav-text'>
                <button>Roadmaps</button>
                    
                </li>
            </ul>
        </nav>
        </IconContext.Provider>
        </div>
        <div>{state.array[state.count]}</div>
      </>
  );
}
function Menurightbar(){
  const [state,setState]=useState(null);
  useEffect(()=>{
    axios({
      url: "http://localhost:5000/placements",
      method: "GET",
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Authorization" : `Bearer ${token}`
      },
      
    }).then((res) => {
      console.log(res.data.placements);
      setState(res.data.placements);
      //console.log(data);
      
    }).catch((err)=>{
      alert(err);
      console.log(err);
    }); 
  },[])
   let content=[];
  if(state){
    state.forEach((ele) => {
      content.push(<h1 key={ele.companyname}>{ele.companyname}</h1>)
      ele.jobs.forEach((le)=>{
        content.push(
        <>
        <p>{le.RecruitmentProcess}</p>
        <p >{le.EmploymentType}</p>
        <p >{le.JobTitle}</p>
        <p >{le.WorkLocation}</p>
        <p >{le.Description}</p>
        <p >{le.EligibilityCriteria}</p>
        <p >{le.Salary}</p>
        </>)
      })
    })
  }
    
    
    return(
        <>
          {content}
        </>
    );
}
function MenuCompet(){
  const [state,setState]=useState(null);
  useEffect(()=>{
    axios({
      url: "http://localhost:5000/competitions",
      method: "GET",
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Authorization" : `Bearer ${token}`
      },
      
    }).then((res) => {
      console.log(res.data.competitions);
      setState(res.data.competitions);
      //console.log(data);
      
    }).catch((err)=>{
      alert(err);
      console.log(err);
    }); 
  },[])
   let content=[];
  if(state){
    state.forEach((ele) => {
      ele.competitions.forEach((le)=>{
        content.push(
          <>
          <p>{le.AboutCompany}</p>
          <p>{le.Duration}</p>
          <p>{le.Challengeformat}</p>
          <p>{le.Guidelines}</p>
          <p>{le.Prizes}</p>
          <p >{le.Description}</p>
          <p >{le.EligibilityCriteria}</p>
          </>)
      })
    })
  }
  return(
    <>
      <div className='info'>
        {content}         
      </div>
    </>
);
}
function Menutut(){
  const [state,setState]=useState(null);
  useEffect(()=>{
    axios({
      url: "http://localhost:5000/tutorials",
      method: "GET",
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Authorization" : `Bearer ${token}`
      },
      
    }).then((res) => {
      console.log(res.data.tutorials);
      setState(res.data.tutorials);
      //console.log(data);
      
    }).catch((err)=>{
      alert(err);
      console.log(err);
    }); 
  },[])
   let content=[];
  if(state){
    state.forEach((ele) => {
      ele.tutorials.forEach((le)=>{
        content.push(
          <>
          <div className='video'>
            
            <label>{le.video_title}</label>
            <div>
            <ReactPlayer url={le.video_link}/>
            </div>
            <p>{le.Description}</p>
          </div>
          </>)
      })
    })
  }
    return(
      <>
        <div className='info'>
          {content}
        </div>
      </>
  );
}
function Menuebook(){
  /*const [state,setState]=useState(null);
  useEffect(()=>{
    axios({
      url: "http://localhost:5000/ebooks",
      method: "GET",
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Authorization" : `Bearer ${token}`
      },
      
    }).then((res) => {
      console.log(res.data);
      setState(res.data);
      //console.log(data);
      
    }).catch((err)=>{
      alert(err);
      console.log(err);
    }); 
  },[])*/
  return(
    <>
      <div className='info'>
          <h1>hejkkii</h1>
      </div>
    </>
);
}
export default Menubar;
