

import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomAudioPlayer from "../Components/Customaudio";
import PlayMusic from "../Components/PlayMusic";
import { Link } from "react-router-dom";

function MusicPlay() {
  const CLIENT_ID = "d91c5dedcd894275950e1df04613f3df";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [tracks, setTracks] = useState([]);



  const [currentSong, setCurrentSong] = useState({
    name: "",
    artist: "",
    image: "",
  });
  const playSong = (track) => {
    setCurrentSong({
      name: track.name,
      artist: track.artists.map((artist) => artist.name).join(", "),
      image: track.album.images.length > 0 ? track.album.images[0].url : "",
    });
  }

  useEffect(() => {
    const hash = window.location.hash;
    if (!token && hash) {
      const accessToken = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      if (accessToken) {
        setToken(accessToken);
        window.localStorage.setItem("token", accessToken);
      }
    }
  }, [token]);

  const searchTracks = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: searchKey,
          type: "track",
        },
      });
      setTracks(response.data.tracks.items);
    } catch (error) {
      console.error("Error searching tracks:", error);
    }
  };

  return (
    <div className="main-container">
      <div class="sub-container">
        <div class="side-box">
          <ul>
            <strong>
              <li className="logo-name">
                <img src="home.png " alt="home" className="icon" />
                <span className="link-btn"><Link to='/backtohome' className="link-btn" >Home</Link></span>
              </li>
              <li className="logo-name">
                <img src="search.png " alt="home" className="icon" />
                <span className="lightgrey-clr">
                  <a className="link-btn"
                    href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                  >
                    {" "}
                    Search
                  </a>
                </span>
              </li>
            </strong>
          </ul>
        </div>
        <div classNameName="side-bar ">
          <ul className="library">
            <li className="logo-name ">
              <img src="playlist.png " alt="home" className="icon" />
              <span>Your Library</span>
            </li>
            <img src="add.png" className="icon" />
          </ul>
          <span className="btn-for-list">
            <button >Playlists</button>
            <button>Podcasts & Shows</button>
          </span>
          <div className="bottom-side">
            <div className="library">
              <div className="Recents">
                <i className="bi bi-search"></i>
                <span>
                  <i className="bi bi-list-ul"></i>
                </span>
                <span>Recents</span>
              </div>
            </div>
            <div className="music-folders">
              <div className="folder">
                <div>
                  <img src="liked.jpeg" alt="loading" />
                </div>

                <div className="details">
                  <li className="name">liked songs</li>
                  <li className="about">playlist</li>
                </div>
              </div>

              <div className="folder">
                <div>
                  <img src="spotify (2).jpg" alt="loading" />
                </div>

                <div className="details">
                  <li className="name">Your episodes</li>
                  <li className="about">playlist</li>
                </div>
              </div>

              <div className="folder" >
                <div>
                  <img src="spotify (1).jpg" alt="loading" />
                </div>

                <div className="details">
                  <li className="name" >#Greeshma playlist</li>
                  <li className="about">playlist</li>
                </div>
              </div>

              <div className="folder">
                <div>
                  <img src="spotify (3).jpg" alt="loading" />
                </div>

                <div className="details">
                  <li className="name">liked songs</li>
                  <li className="about">playlist</li>
                </div>
              </div>

              <div className="folder">
                <div>
                  <img src="spotify (2).jpg" alt="loading" />
                </div>

                <div className="details">
                  <li className="name">liked songs</li>
                  <li className="about">playlist</li>
                </div>
              </div>

              <div className="folder">
                <div>
                  <img src="spotify (2).jpg" alt="loading" />
                </div>

                <div className="details">
                  <li className="name">liked songs</li>
                  <li className="about">playlist</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sub-container-right">
        <div className="topbar">
          <div className="prev-next-buttons">
            <button type="button" className=" fa bi bi-chevron-left ">
              {" "}
            </button>
            <button type="button" className="fa bi bi-chevron-right">
              {" "}
            </button>

            <div className="search-btn-song ">
              <form onSubmit={searchTracks}>
                <input
                  type="text"
                  placeholder="What do you want to listen to???"
                  onChange={(e) => setSearchKey(e.target.value)}
                />
              </form>
            </div>
          </div>
          <div className="navbar">
            <span className="btn-install-app">
              <i class="bi bi-arrow-down-circle"></i> Install App
            </span>
            <i class="bi bi-bell"></i>
            <i class="bi bi-person"></i>
          </div>
        </div>
        <div class="spotify-playlists">
          <h2>Spotify Playlists</h2>
          <div class="main-right-container">
          <div className="list">
  {tracks.map((track) => (
    <div className="item" key={track.id} onClick={() => playSong(track)}>
      {track.album.images.length > 0 && (
        <img
          src={track.album.images[0].url}
          alt={track.name}
        />
      )}
      <div className="play">
        <span className="fa ">
          {track.preview_url && (
            <CustomAudioPlayer previewUrl={track.preview_url} />
          )}
        </span>
      </div>
      <h4>{track.name}</h4>
      <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
    </div>
  ))}
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

          </div>
        </div>

        <Link to='/tomainmusic'className="link-btn" > 
        <div className="footer-listen">

          <div className="left">
            <div className="song-info">
       
              <img src={currentSong.image} alt="loading" /> 
            </div>
            <div className="details">
              <h3>{currentSong.name}</h3>
              <div>{currentSong.artist}</div>
            </div>
          </div>
          <div className="music-playbar">
            <div className="playbar-icons">
              <i className="bi bi-shuffle"></i>
              <i className="bi bi-skip-start-fill"></i>
              <i className="bi bi-play-circle-fill"></i>
              <i className="bi bi-skip-end-fill" ></i>
              <i className="bi bi-repeat"></i>
            </div>


            <div className="music-duration">

              <div id="music-start">
                -:--

                
              </div>

              <div className="bar">
                <input type="range" id="seek" />
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

              <input type="range" id="seek" />

            </div>

          </div>

        </div>
        </Link>

      
      </div>
    </div>
  );
}

export default MusicPlay;
