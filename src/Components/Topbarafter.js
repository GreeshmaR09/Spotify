import React from 'react'
import { Link } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";

function Topbarafter() {
    return (
        <div className="topbar">
        <div className="prev-next-buttons">
        <button type="button" className=" fa bi bi-chevron-left "> </button>
      <button type="button" className="fa bi bi-chevron-right"> </button>
        
       
    
        <div className='search-btn-song '>  
       <Link to='/search-btn-after'><input type='text' placeholder='What do you want to listen to???'></input></Link></div>
        </div>
        <div className="navbar">
      
            <Link to='/loginpage'  className='btn-install-app'>    
            <i class="bi bi-arrow-down-circle"></i>	Install App</Link>
            <i class="bi bi-bell"></i> 
            <i class="bi bi-person"></i>
         
         
        </div>
      </div>
      )
}

export default Topbarafter