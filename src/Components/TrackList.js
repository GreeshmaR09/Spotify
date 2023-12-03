// TrackList.js
import React from 'react';

const TrackList = ({ tracks }) => {
  return (
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
  );
};

export default TrackList;
