import React from 'react'
import '../Styles/Style.css'
import { Link } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

function Body() {
  return (
    <div>
      <div className="topbar">
        <div className="prev-next-buttons">
          <button type="button" className="fa bi bi-chevron-left"> </button>
          <button type="button" className="fa bi bi-chevron-right"> </button>
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
      <div class="spotify-playlists">
                <h2>Spotify Playlists</h2>
                <div class="main-right-container">
                <div className="list">
                            <div className="item">
                                <img src="spotify (3).jpg" />
                                <div className="play">
                                    <span className="fa fa-play bi bi-play-fill"></span>
                                </div>
                                <h4>Today's Top Hits</h4>
                                <p>Billie and Ariana Grande are on top of the ...</p>
                            </div>
                        <div className="list">
                            <div className="item">
                                <img src="spotify (3).jpg" />
                                <div className="play">
                                    <span className="fa fa-play bi bi-play-fill">
                                   </span>
                                </div>
                                <h4>Today's Top Hits</h4>
                                <p>Billie and Ariana Grande are on top of the ...</p>
                            </div>

                        </div>
                        <div className="list">
                            <div className="item">
                                <img src="spotify (1).jpg" />
                                <div className="play">
                                    <span className="fa fa-play bi bi-play-fill"></span>
                                </div>
                                <h4>Today's Top Hits</h4>
                                <p>Billie and Ariana Grande are on top of the ...</p>
                            </div>

                        </div>
                        <div className="list">
                            <div className="item">
                                <img src="spotify (5).jpg" />
                                <div className="play">
                                    <span className="fa fa-play bi bi-play-fill"></span>
                                </div>
                                <h4>Today's Top Hits</h4>
                                <p>Billie and Ariana Grande are on top of the ...</p>
                            </div>

                        </div>
                        <div className="list">
                            <div className="item">
                                <img src="spotify (8).jpg" />
                                <div className="play">
                                    <span className="fa fa-play bi bi-play-fill"></span>
                                </div>
                                <h4>Today's Top Hits</h4>
                                <p>Billie and Ariana Grande are on top of the ...</p>
                            </div>

                        </div>

                    </div>
                    </div>
                    </div>
                    </div>
  );
}

export default Body;
