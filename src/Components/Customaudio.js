import React, { useState, useRef } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

function CustomAudioPlayer({ previewUrl }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button className="custom-audio-button" onClick={togglePlay}>
        {isPlaying ?
         <i className='bi bi-pause-fill'/> : <i className='bi bi-play-fill'/>}
      </button>
      <audio ref={audioRef}>
        <source src={previewUrl} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default CustomAudioPlayer;
