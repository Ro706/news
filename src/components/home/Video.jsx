import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
        <div 
            ref={videoRef}
            style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden" }}
        >
            <motion.section
                className="video"
                style={{ width: "100%", height: "100%" }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <video
                    src="/video/News.webm"
                    width="100%"
                    height="100%"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        marginTop: 0,
                        borderRadius: 0,
                        objectFit: "cover",
                        pointerEvents: "none",
                        userSelect: "none"
                    }}
                    tabIndex={-1}
                />
            </motion.section>
        </div>
    );
}

export default Video;