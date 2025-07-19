import React from 'react'
import Title from './contact/Title';
import Form from './contact/Form';
import GetInTouch from './home/GetInTouch';
import Hellotag from './home/Hellotag';
import Footer from './home/Footer';
function Contact() {
  return (
    <div>
      <Title/>
      <Form/>
      <GetInTouch />
      <Hellotag />
      <Footer />
    </div>
  )
}

export default Contact
