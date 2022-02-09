import React,{useState} from 'react';
import * as FaICons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Menubar.css';
import { IconContext } from 'react-icons';
function Menubar() {
    const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
  return (
      <>
        <div className='header'>
            <h1>Your Guide</h1>
        </div>
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
            <Link to='#' className='menu'>
                <FaICons.FaBars onClick={showSidebar} />
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-list' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
                <li className='nav-text'>
                    <Link to='/'>
                        <span>Placements</span>
                    </Link>
                </li>
                <li className='nav-text'>
                    <Link to='/Competitions'>
                        <span>Competitions</span>
                    </Link>
                </li>
                <li className='nav-text'>
                    <Link to='/Ebook'>
                        <span>Ebook</span>
                    </Link>
                </li>
                <li className='nav-text'>
                    <Link to='/Tutorials'>
                        <span>Tutorials</span>
                    </Link>
                </li>
                <li className='nav-text'>
                    <Link to='/Roadmaps'>
                        <span>Roadmaps</span>
                    </Link>
                </li>
                <li className='nav-text'>
                    <Link to='/Newsfeed'>
                        <span>Newsfeed</span>
                    </Link>
                </li>
            </ul>
        </nav>
        </IconContext.Provider>
      </>
  );
}

export default Menubar;
