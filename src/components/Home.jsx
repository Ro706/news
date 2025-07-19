import React from 'react'
import './CSS/Home.css';
import './CSS/Service.css';
import './CSS/Client.css'; 
import './CSS/Work.css';
import './CSS/News.css';
import './CSS/HelloTag.css';
import './CSS/GetInTouch.css';
import './CSS/Footer.css';
import Events from './Events';
import Client from './home/Client'; 
import Service from './home/Service'; 
import Textgrid from './home/Textgrid'; 
import Video from './home/Video'; 
// import Work from './home/Work';
import News from './home/News';
import GetInTouch from './home/GetInTouch';
import Hellotag from './home/Hellotag';
import Footer from './home/Footer';

function Home({ setNavbarTransparent }) {
    return (
        <div>
            <Video setNavbarTransparent={setNavbarTransparent} />
            <Textgrid />
            <Service />
            <Client />
            <Events />
            {/* <Work /> */}
            <News />
            <GetInTouch />
            <Hellotag />
            <Footer />
        </div>
    )
}

export default Home;