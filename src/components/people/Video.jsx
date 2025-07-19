import React from 'react'
import { ReactComponent as Arrow } from '../../assets/asset 39.svg';

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
            <div className="video-heading">
                    Client
            </div>
            <div className="video-arrow">
                    <Arrow className="arrow" />
            </div>
            <div className="video-description">
                    <p>
                            Our teams are made up of industry leading talent with diverse backgrounds, servicing clients in key markets around the world
                    </p>
            </div>
    </div>
);
}
export default Video;
