import React from 'react'
import './CSS/Leader.css'
import Video from './people/Video'
import Lead from './people/Lead'
import GetInTouch from './home/GetInTouch';
import Hellotag from './home/Hellotag';
import Footer from './home/Footer';
function People() {
  return (
    <div>
      <Video />
      <Lead />
      <GetInTouch />
      <Hellotag />
      <Footer />
    </div>
  )
}

export default People
