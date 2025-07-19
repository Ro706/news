import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ReactComponent as Arrow } from '../../assets/asset 39.svg';

function Textgrid() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className='textgrid-container'>
      <motion.section
        ref={ref}
        className="grid"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.div
          className="section-text"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1>Strategic Storytelling. Measurable Impact.</h1>
        </motion.div>
        <motion.div
          initial={{ rotate: -90, opacity: 0 }}
          animate={isInView ? { rotate: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Arrow className="arrow" />
        </motion.div>
        <motion.div
          className="section-description"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>
            <span>
              Newsmaker Media and Communications is a full-service communications consultancy built for the evolving media landscape. Founded with a vision to bring authenticity and agility into the PR and marketing ecosystem, we help brands tell stories that resonate, engage, and influence.
            </span>
          </p>
          {expanded && (
            <>
              <p>
                <span>
                  With a rich portfolio across sectors including healthcare, tech, education, lifestyle, and public affairs, our campaigns are data-informed, digitally empowered, and media-savvy. Whether you're an emerging startup or an established brand, we act as an extension of your team—strategic, responsive, and always outcome-driven.
                </span>
              </p>
              <div className="why-choose-us">
                <h1>Why Choose Us:</h1>
                <ul>
                  <li>15+ years of cross-industry expertise</li>
                  <li>Integrated approach: PR, Digital, Content, and Strategy</li>
                  <li>Deep relationships with media and influencers</li>
                  <li>Tailor-made solutions, no cookie-cutter campaigns</li>
                </ul>
              </div>
            </>
          )}
          <button
            className="read-more-btn"
            onClick={() => setExpanded((prev) => !prev)}
            style={{ marginTop: '1rem' }}
          >
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Textgrid;
