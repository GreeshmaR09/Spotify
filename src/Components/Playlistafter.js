import React from "react";

function Playlistafter() {
  return (
    <div classNameName="side-bar ">
      <ul className="library">
        <li className="logo-name ">
          <img src="playlist.png " alt="home" className="icon" />
          <span>Your Library</span>
        </li>
        <img src="add.png" className="icon" />
      </ul>
      <span className="btn-for-list">
        <button>Playlists</button>
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
  );
}

export default Playlistafter;
