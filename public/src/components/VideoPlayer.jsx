import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import img from '../images/linkednprofile.jpeg'
// import {video} from '../videos/video'

function VideoPlayer() {
  const [videoReady, setVideoReady] = useState(false);

  const handleReady = () => {
    setVideoReady(true);
  };

  return (
    <div>
      <h2>Using react-player</h2>
      {!videoReady ? (
        <img
        src={img}
        alt="Thumbnail"
        width="640"
        height="360"
      />
      ) : (
        <ReactPlayer
          url="https://assets.mixkit.co/videos/preview/mixkit-thick-green-liquid-in-an-abstract-video-51723-large.mp4"
          width="640"
          height="360"
          playing={true}
          muted={true}
          
          controls={false}
          onReady={handleReady}
        />
      )}
    </div>
  );
}

export default VideoPlayer;
