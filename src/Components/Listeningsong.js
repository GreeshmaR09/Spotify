import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

function Listeningsong() {
  return (
    
    <div className="footer-listen">    
       
        
        <div className="left">
            <div className="song-info">
                <img src="spotify (1).jpg" alt="loading"/>
            </div>
                <div className="details">
                   <h3>Dynamite</h3>
                    <div>
                        BTS
                    </div>
               </div>
        </div>


        <div className="music-playbar">

            
          
            <div className="playbar-icons">

                <i className="bi bi-shuffle"></i>

                <i className="bi bi-skip-start-fill"></i>

                <i className="bi bi-play-circle-fill"></i>

                <i className="bi bi-skip-end-fill"></i>

                <i className="bi bi-repeat"></i>

            </div>

            
            <div className="music-duration">
               
                <div id="music-start">
                    -:--
                </div>
                   
                    <div className="bar">
                      <input type="range" id="seek"/>
                    </div>
                
                    <div id="music-end">
                    -:--
                </div>

            </div>

        </div>


        
        <div className="music-volume">

            <i className="bi bi-play-btn"></i>

            <i className="bi bi-collection"></i>

            <i className="bi bi-pc-display"></i>

            <i className="bi bi-volume-down"></i>

            <div className="volume-bar">
                
                <input type="range" id="seek"/>

            </div>

        </div>

    </div>

  )
}

export default Listeningsong