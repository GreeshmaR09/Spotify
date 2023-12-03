import React from 'react'
import Navinplay from '../Components/Navinplay'
import Topbarafter from '../Components/Topbarafter'
import Searchitems from '../Components/Searchitems'
import Footer from '../Components/Footer'
import Playlist from '../Components/Playlist'

function SearchActiveafter() {
  return (
    <div className='main-container'>
    <div class="sub-container">
    <Navinplay/>
    <Playlist/>
    </div>
    <div class="sub-container-right">
  <div>
    <Topbarafter/>
  <div className='search-content'> 
  <Searchitems/>
  <Footer/>
  </div>

  
  
  </div>
 
    </div>
      
     </div>
  )
}

export default SearchActiveafter