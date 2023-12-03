import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const CLIENT_ID = "d91c5dedcd894275950e1df04613f3df";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;

    if (!token && hash) {
      const accessToken = hash.substring(1)
        .split("&")
        .find(elem => elem.startsWith("access_token"))
        .split("=")[1];

      if (accessToken) {
        // Update the state with the access token
        setToken(accessToken);
        // Store the token in localStorage if needed
        window.localStorage.setItem("token", accessToken);
      }
    }
  }, [token]);

  const logout = () => {
    // Clear the token from state
    setToken("");
    // Remove the token from localStorage
    window.localStorage.removeItem("token");
  };

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

      // Assuming the response structure contains a 'tracks' key
      setTracks(response.data.tracks.items);
    } catch (error) {
      console.error('Error searching tracks:', error);
    }
  };

  return (
    <div>
      <h1>Spotify</h1>
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
      <button onClick={logout}>Logout</button>
      <form onSubmit={searchTracks}>
        <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      <div>
        <h2>Search Results</h2>
        <ul>
          {tracks.map((track) => (
            <li key={track.id}>
              <p>{track.name}</p>
              <p>{track.artists.map((artist) => artist.name).join(', ')}</p>
              {track.album.images.length > 0 && (
                <img src={track.album.images[0].url} alt={track.name} style={{ width: 100, height: 100 }} />
              )}
              {track.preview_url && (
                <audio controls>
                  <source src={track.preview_url} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
