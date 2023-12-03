import React from 'react'
import Searchitems from '../Components/Searchitems';
import Navbar from '../Components/Navbar';
import Playlist from '../Components/Playlist';
import Topbar from '../Components/Topbar';
import Footer from '../Components/Footer';

function Searchactive() {
    return (
        <div className='main-container'>
      <div class="sub-container">
      <Navbar/>
      <Playlist/>
      </div>
      <div class="sub-container-right">
    <div><Topbar/>
    <div className='search-content'> 
    <Searchitems/>
    <Footer/>
    </div>
  
    
    
    </div>
   
      </div>
        
       </div>
      )
}

export default Searchactive