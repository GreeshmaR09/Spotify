import React from 'react'
import Navbar from '../Components/Navbar'
import Playlist from '../Components/Playlist'
import Topbar from '../Components/Topbar'
import Body from '../Components/Body'
import Footer from '../Components/Footer'
import '../Styles/Style.css'
import FooterBefore from '../Components/FooterBefore'

function Combined() {
  return (<div>
   <div className='main-container'>
  <div class="sub-container">
  <Navbar/>
  <Playlist/>
  </div>
  <div class="sub-container-right">
<Body/>
<Footer/>

  </div>
 
  
  </div>
  <FooterBefore/>
   </div>
  )
}

export default Combined