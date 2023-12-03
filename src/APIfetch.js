import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [searchKey, setSearchKey] = useState("");
  const [tracks, setTracks] = useState([]);

  const searchTracks = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("https://api.spotify.com/v1/search", {
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
      <h1>Spotify Track Search</h1>

      <form onSubmit={searchTracks}>
        <label htmlFor="searchInput">Search for Tracks: </label>
        <input
          type="text"
          id="searchInput"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
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
                <img
                  src={track.album.images[0].url}
                  alt={track.name}
                  style={{ width: 100, height: 100 }}
                />
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
