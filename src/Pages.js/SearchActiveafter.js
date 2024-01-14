import React from 'react'
import Navinplay from '../Components/Navinplay'
import Topbarafter from '../Components/Topbarafter'
import Searchitems from '../Components/Searchitems'
import Footer from '../Components/Footer'
import Playlist from '../Components/Playlist'
import Listeningsong from '../Components/Listeningsong'
import Playlistafter from '../Components/Playlistafter'

function SearchActiveafter() {
  return (
    <div className='main-container'>
    <div class="sub-container">
    <Navinplay/>
    <Playlistafter/>
    </div>
    <div class="sub-container-right">
  <div>
    <Topbarafter/>
  <div className='search-content'> 
  <Searchitems/>
  <Footer/>
  <Listeningsong/>
  </div>

  
  
  </div>
 
    </div>
      
     </div>
  )
}

export default SearchActiveafter