import React from 'react'
import { useParams } from "react-router-dom";
import Video from '../components/service/Video';
import Product from './service/Product';
import GetInTouch from './home/GetInTouch';
import Hellotag from './home/Hellotag';
import Footer from './home/Footer';
function Services({ setNavbarTransparent }) {
  const { serviceId } = useParams();
  return (
    <div>
      <Video setNavbarTransparent={setNavbarTransparent} />
      <Product selectedServiceId={serviceId} />
      <GetInTouch />
      <Hellotag />
      <Footer />
    </div>
  )
}

export default Services
