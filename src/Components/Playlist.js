import React from 'react'
import '../Styles/Style.css'
import "bootstrap-icons/font/bootstrap-icons.css";

function Playlist() {
    return (

        <div className="side-bar ">

                <ul className="library">
                    <li className="logo-name ">
                        <img src="playlist.png " alt="home" className="icon" />
                        <span >Your Library</span>
                    </li>
                    <img src="add.png" className="icon" />

                </ul>

                <div className="scroll-down">
                    <div className="create-playlist">
                        <h4> Create your first playlist</h4>
                        <h5> It's easy, we'll help you</h5>

                        <button className="playlist"><b>Create playlist</b></button>
                    </div>
                    <div className="create-playlist">
                        <h4>Let's find some podcasts to follow</h4>
                        <h5> We'll keep you updated on new episodes</h5>
                        <button className="playlist"><b>Browse podcasts</b></button>
                    </div>
                </div>

                <ul class="footer-info">
                    <li>Legal</li>
                    <li>Primacy Center</li>
                    <li> Privacy Policy</li>
                    <li>Notice at Collection </li>
                    <li>Cookies</li>
                    <li>About Ads</li>
                    <li>Accesibility</li>
                    <li>cookies</li>

                    <br />
                    <button class="english-button">
                        <i class="fa fa-globe"></i>English</button>
                </ul>
           
        </div>
    )
}

export default Playlist