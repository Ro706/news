import { ReactComponent as Arrow } from '../../assets/asset 39.svg';
function Title() {
  return (
     <div className="video-container">
             <img
                 className="video-bg"
                 src='./assets/contact.png'
                 alt="Contact background"
             />
             <span
                 className="grid-overlay"
             ></span>
             <div className="video-heading">
                 Work 
             </div>
             <span className='video-heading-second'>With US</span>
             <div className="video-arrow">
                 <Arrow className="arrow" />
             </div>
             <div className="video-description">
                 <p>
                     From the smallest crafted creative to a moonshot idea, we have what it takes to make your project come to life.
                 </p>
             </div>
         </div>
);
}
export default Title
