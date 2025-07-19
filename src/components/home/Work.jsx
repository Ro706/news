import React from 'react';

function Work() {
    return (
        <section className="work-section">
            <h1 className="work-title">Work</h1>
            <span className="line"></span>
            <div className="netflix-video">
                <video src="./video/pixel.mp4" autoPlay muted loop className="work-video"></video>
            </div>
            <h2 className="google-title">
                GOOGLE
            </h2>
            <p className="google-description">
                Reimagining print media into a mixed reality product launch experience
            </p>
            <div className="netflix-video">
                <video src="./video/netflix.mp4" autoPlay muted loop className="work-video"></video>
            </div>
            <h2 className="google-title">
                NETFLIX
            </h2>
            <p className="google-description">
                Bridging the gap between product and marketing
            </p>
            <div className="netflix-video">
                <video src="./video/gemini.mp4" autoPlay muted loop className="work-video"></video>
            </div>
            <h2 className="google-title">
                GEMINI
            </h2>
            <p className="google-description">
                Inspiring users to unlock their dreams with Gemini
            </p>
            <div className="jio">
                <img src="./img/jio.png" alt="jio" />
            </div>
            <h2 className="google-title">
                JIO
            </h2>
            <p className="google-description">
                Fuelling creator ambition with the power of Jio & Youtube Shorts
            </p>
        </section>
    );
}

export default Work;
