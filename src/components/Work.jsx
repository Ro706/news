import React from 'react'
import Title from './work/Title';
import Video from './work/Video';
import GetInTouch from './home/GetInTouch'; 
import Footer from './home/Footer';
import './CSS/Footer.css';
import './CSS/GetInTouch.css';
import './CSS/Work.css';
import './CSS/Titlework.css';
import './CSS/VideoWork.css';
function Work() {
  return (
    <div style={{ width: "100vw", height: "100vh", marginTop: "100px", padding: 0 }}>
      <Title />
      <Video />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default Work;
