import React from 'react';

function TempVideo({ videoSrc, heading, description }) {
    return (
        <div className="video-container">
            <video autoPlay loop muted playsInline className="background-video">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="grid-overlay">
                <div className="content">
                    <h1>{heading}</h1>
                    <span className="videoline"></span>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TempVideo;
