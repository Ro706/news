import React from 'react'
import './CSS/Titlework.css';
import './CSS/CardNews.css';
import GetInTouch from './home/GetInTouch';
import Hellotag from './home/Hellotag';
import Footer from './home/Footer';
import Title from './News/Title';
import NewsReport from './News/NewsReport';
function News() {
  return (
    <div>
      <Title />
      <NewsReport />
      <GetInTouch />
      <Hellotag />
      <Footer />
    </div>
  )
}

export default News
