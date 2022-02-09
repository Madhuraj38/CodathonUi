import React from 'react';
import * as FaICons from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Menubar() {
  return (
      <>
        <div className='header'>
            <h1>YOUR GUIDE</h1>
        </div>
        <div className='navbar'>
            <Link to='#' className='menu'>
                <FaICons.FaBars/>
            </Link>
        </div>
        <nav className='nav-menu'>
            <ul className='nav-list'>
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
      </>
  );
}

export default Menubar;
