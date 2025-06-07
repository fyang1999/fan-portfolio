
import React from 'react';

function Video() {
  return (
    <div className="page">
      <h2>Video</h2>
      <div className="grid">
        {/* Replace with your video paths */}
        <video controls src="/videos/video1.mp4" width="300"></video>
        <video controls src="/videos/video2.mp4" width="300"></video>
      </div>
    </div>
  );
}

export default Video;
