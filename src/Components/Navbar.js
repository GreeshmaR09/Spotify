import React from 'react'
import '../Styles/Style.css'
import { Link } from 'react-router-dom';



function Navbar() {
     
  return (
    <div class="side-box">
    <ul>
        <strong>
    <li>
    <img src="icon.png" className="logo" alt="Logo" />
                            <span> Spotify</span>
                        </li>
        <li className="logo-name">
            <img src="home.png " alt="home" className="icon"/>
            <span>
             <Link to='/backtohome' className='link-btn' >Home</Link>
            </span>


        </li>
        <li className="logo-name">
            <img src="search.png " alt="home" className="icon"/>
            <span ><Link to='/search-btn' className='lightgrey-clr' >Search</Link></span>
        </li>
        </strong>
    </ul>
</div>
  )
}

export default Navbar