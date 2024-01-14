import React from 'react'
import '../Styles/Style.css'
import { Link } from 'react-router-dom';

function Topbar() {
  return (
    <div className="topbar">
    <div className="prev-next-buttons">
      <button type="button" className="bi bi-chevron-left "> </button>
      <button type="button" className="bi bi-chevron-right"> </button>
      <div className='search-btn-song '>  
   <Link to='/search-btn'><input type='text' placeholder='What do you want to listen to???'></input></Link> 
    </div>

    </div>
    <div className="navbar">
      <ul>
        <li>
          <a href="#"> Premium</a>
        </li>
        <li>
          <a href="#"> Support</a>
        </li>
        <li>
          <a href="#"> Download</a>
        </li>
        <li className="devider">|</li>
        <li>
          <a href="#">Sign Up</a>
        </li>
      </ul>
      <button type="button"><Link to='/loginpage'  className='btn'>Log In</Link></button>
    </div>
  </div>
  )
}

export default Topbar