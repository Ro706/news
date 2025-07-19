import React from 'react'

function Video() {
  return (
    <div className="video-container">
        <video
            className="video-bg"
            src="/video/pixel.mp4"
            autoPlay
            loop
            muted
        />
        <span
            className="grid-overlay"
        ></span>
        <div className="career-video-heading">
            Career
        </div>
    </div>
  )
}

export default Video;
