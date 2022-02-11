import React,{useState} from 'react';
import * as FaICons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Menubar.css';
import axios from 'axios';
import {token} from './Login';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';
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
  //const [state,setState]=useState();
  let placements,info={};//,competitions,ebooks,tutorials;
  //placements
  axios({
    url: "http://localhost:5000/placements",
    method: "GET",
    headers: {
      'Access-Control-Allow-Origin': '*',
      "Authorization" : `Bearer ${token}`
    },
    
  }).then((res) => {
    console.log(res.data);
    placements=res.data;
    info=placements;
  }).catch((err)=>{
    alert(err);
    console.log(err);
  }); 
  /*//competitions
  axios({
    url: "http://localhost:5000/competitions",
    method: "GET",
    headers: {
      'Access-Control-Allow-Origin': '*',
      "Authorization" : `Bearer ${token}`
    },
    
  }).then((res) => {
    console.log(res.data);
    competitions=res.data;
  }).catch((err)=>{
    alert(err);
    console.log(err);
  }); 
  //ebook
  axios({
    url: "http://localhost:5000/ebooks",
    method: "GET",
    headers: {
      'Access-Control-Allow-Origin': '*',
      "Authorization" : `Bearer ${token}`
    },
    
  }).then((res) => {
    console.log(res.data);
    ebooks=res.data;
  }).catch((err)=>{
    alert(err);
    console.log(err);
  });
  //tutorials 
  axios({
    url: "http://localhost:5000/tutorials",
    method: "GET",
    headers: {
      'Access-Control-Allow-Origin': '*',
      "Authorization" : `Bearer ${token}`
    },
    
  }).then((res) => {
    console.log(res.data);
    tutorials=res.data;
  }).catch((err)=>{
    alert(err);
    console.log(err);
  });
 */
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
                        <button onClick={info=placements}>Placements</button>
                    
                </li>
                <li className='nav-text'>
                    
                <button>Competitions</button>
                    
                </li>
                <li className='nav-text'>
                    
                <button>Ebook</button>
                    
                </li>
                <li className='nav-text'>
                <button>Tutorials</button>
                </li>
                <li className='nav-text'>
                <button>Roadmaps</button>
                    
                </li>
                <li className='nav-text'>
                <button>Newsfeed</button>
                </li>
            </ul>
        </nav>
        </IconContext.Provider>
        </div>
        <Menurightbar data={info}/>
      </>
  );
}
function Menurightbar(props){
    let data=props.data;
    console.log(data);
    return(
        <>
          <h1>hello</h1>
        </>
    );
}
export default Menubar;
