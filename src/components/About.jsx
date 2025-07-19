import './CSS/Home.css';
import Title from './about/Title'
import Markets from './about/Markets'
import Videos from './about/Videos'
import OurWork from './about/OurWork'
import Industry from './about/Industry'
import TempVideo from './about/TempVideo'
import PartnerShip from './about/PartnerShip'
import GetInTouch from './home/GetInTouch';
import Hellotag from './home/Hellotag';
import Footer from './home/Footer';
import Video from './home/Video';
function About({ setNavbarTransparent }) {
  return (
    <div>
      <Video setNavbarTransparent={setNavbarTransparent} />
      <Title />
      <Markets />
      <Videos />
      <OurWork />
      <TempVideo videoSrc="../../assets/video.mp4" heading="DEI" description="Diverse backgrounds, cultures and skill sets drive fresh, relevant work w our clients." />
      <Industry/>
      <TempVideo videoSrc="/video/gemini.mp4" heading="A creative advantage" description="Bringing bold ideas to life with world class execution powered by technology" />
      <PartnerShip />
      <GetInTouch />
      <Hellotag />
      <Footer />
    </div>
  )
}

export default About;

