import React from 'react'
import Musicmaincom from '../Components/Musicmaincom'
import Navinplay from '../Components/Navinplay'
import Playlistafter from '../Components/Playlistafter'
import Topbarafter from '../Components/Topbarafter'
import Footer from '../Components/Footer'
import Listeningsong from '../Components/Listeningsong'

function MusicMain() {
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
  <Musicmaincom/>
  <Footer/>
  <Listeningsong/>
  </div>

  
  
  </div>
 
    </div>
      
     </div>
  )
}

export default MusicMain