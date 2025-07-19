import { ReactComponent as Arrow } from '../../assets/asset 39.svg';
import { useEffect, useRef } from 'react';

function Video({ setNavbarTransparent }) {
    const videoRef = useRef(null);
    
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    // Set navbar transparent when video section is visible
                    // Use a threshold to determine when to switch
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        setNavbarTransparent(true);
                    } else {
                        setNavbarTransparent(false);
                    }
                },
                {
                    threshold: [0, 0.5, 1], // Multiple thresholds for smooth transition
                    rootMargin: '-80px 0px 0px 0px' // Account for navbar height
                }
            );
    
            const currentVideoRef = videoRef.current;
    
            if (currentVideoRef) {
                observer.observe(currentVideoRef);
            }
    
            return () => {
                if (currentVideoRef) {
                    observer.unobserve(currentVideoRef);
                }
            };
        }, [setNavbarTransparent]);
    
  return (
    <div className="video-container">
      <video
        className="video-bg"
        src="/video/pixel.mp4"
        autoPlay
        loop
        muted
        style={{borderRadius: "0", width: "100%", height: "100%", objectFit: "cover"}}
      />
      <span
        className="grid-overlay"
      ></span>
      <div className="video-heading">
        Service
      </div>
      <div className="video-arrow">
        <Arrow className="arrow" />
      </div>
      <div className="video-description">
        <p>
          Your Communications Partner. Across Every Channel.
        </p>
      </div>    
    </div>
  )
}

export default Video;
