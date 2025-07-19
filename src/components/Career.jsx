import React from 'react';
import Video from './career/Video';
import Joinus from './career/Joinus';
import Value from './career/Value';
import Value2 from './career/Value2';
import Job from './career/Job';
import Profile from './career/Profile';
import GetInTouch from './home/GetInTouch';
import Hellotag from './home/Hellotag';
import Footer from './home/Footer';
function Career() {
  return (
    <div style={{ marginTop: '100px', padding: '20px' }}>
        <Video />
        <Joinus />
        <Value />
        <Value2 />
        <Job />
        <Profile/>
        <GetInTouch />
        <Hellotag />
        <Footer />
    </div>
  )
}

export default Career;

