import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Markets() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.8 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div>
            <h1 className="about-heading">About Us</h1>
            <span className="aboutline"></span>
            <motion.div
                className="markets-container"
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                <motion.div className="markets-left" variants={itemVariants}>
                    <p className="markets-description markets-region">
                        Newsmaker
                        <br />
                        Media and 
                        <br />
                        Communications
                    </p>
                </motion.div>
                <motion.div className="markets-right" variants={itemVariants}>
                    <p className="markets-description">
                        Newsmaker Media and Communications is a full-service communications consultancy built for the evolving media landscape. Founded with a vision to bring authenticity and agility into the PR and marketing ecosystem, we help brands tell stories that resonate, engage, and influence.
                    </p>
                    <br />
                    <p className="markets-description">
                        With a rich portfolio across sectors including healthcare, tech, education, lifestyle, and public affairs, our campaigns are data-informed, digitally empowered, and media-savvy. Whether you're an emerging startup or an established brand, we act as an extension of your team—strategic, responsive, and always outcome-driven.
                    </p>
                </motion.div>
            </motion.div>
            <style>{`
                .markets-container {
                    display: flex;
                    gap: 2rem;
                }
                @media (max-width: 600px) {
                    .markets-container {
                        flex-direction: row;
                        gap: 1rem;
                        align-items: flex-start;
                    }
                    .markets-left, .markets-right {
                        flex: 1;
                        min-width: 0;
                    }
                }
            `}</style>
        </div>
    );
}

export default Markets;
