import React from 'react';
import { motion } from 'framer-motion';

function NotFound() {
  const [isHovered, setIsHovered] = React.useState(false);

  // Responsive styles based on window width
  const [responsive, setResponsive] = React.useState({
    paragraphFontSize: '2rem',
    linkFontSize: '2rem',
    imageWidth: '450px',
  });

  React.useEffect(() => {
    function handleResize() {
      const vw = window.innerWidth;
      if (vw < 600) {
        setResponsive({
          paragraphFontSize: '1.2rem',
          linkFontSize: '1.2rem',
          imageWidth: '250px',
        });
      } else if (vw < 900) {
        setResponsive({
          paragraphFontSize: '1.5rem',
          linkFontSize: '1.5rem',
          imageWidth: '350px',
        });
      } else {
        setResponsive({
          paragraphFontSize: '2rem',
          linkFontSize: '2rem',
          imageWidth: '450px',
        });
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const notFoundContainerStyle = {
    minHeight: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSizing: 'border-box',
  };

  const imageStyle = {
    maxWidth: '120vw',
    width: responsive.imageWidth,
    height: 'auto',
  };

  const paragraphStyle = {
    marginTop: '20px',
    fontSize: responsive.paragraphFontSize,
    lineHeight: 1.3,
    maxWidth: '90vw',
  };

  const linkStyle = {
    fontSize: responsive.linkFontSize,
    color: isHovered ? '#ff2d82' : 'black',
    textDecoration: isHovered ? 'underline' : 'none',
    transition: 'color 0.2s, text-decoration 0.2s',
    cursor: isHovered ? 'pointer' : 'auto',
  };

  return (
    <motion.div
      style={notFoundContainerStyle}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src="./assets/404.png"
        alt="404 Not Found"
        style={imageStyle}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <motion.p
        style={paragraphStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Awww! Page not found
        <br />
        Go back to our{' '}
        <motion.a
          href="/"
          style={linkStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.08, color: '#ff2d82' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          homepage
        </motion.a>
      </motion.p>
    </motion.div>
  );
}

export default NotFound;
