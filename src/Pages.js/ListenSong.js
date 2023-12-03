import React from 'react'
import Playlist from '../Components/Playlist'
import Body from '../Components/Body'
import Topbarafter from '../Components/Topbarafter'
import Navinplay from '../Components/Navinplay'
import Listeningsong from '../Components/Listeningsong'
import "bootstrap-icons/font/bootstrap-icons.css";
import ListenBody from '../Components/ListenBody'

function ListenSong() {
  return (
    <div className='main-container'>
    <div class="sub-container">
    <Navinplay/>
    <Playlist/>
    </div>
    <div class="sub-container-right">
    <Topbarafter/>
    <ListenBody/>
    <Listeningsong/>
  
    </div>
    </div>

  )
}

export default ListenSong