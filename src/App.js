import React, { useState, useEffect } from 'react';
import './App.css';
import './components/CSS/servicepage.css';
import './components/CSS/Navbar.css';
import './components/CSS/Service.css';
import './components/CSS/Report.css';
import './components/CSS/Aboutpage.css';
import './components/CSS/contact.css';
import './components/CSS/Career.css';
import './components/CSS/Worksub.css';
import './components/CSS/Events.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Services from './components/Services';
import About from './components/About';
import People from './components/People';
import News from './components/News';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Report from './components/News/Report';
import Career from './components/Career';
import Worksub from './components/Worksub';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const AppContent = () => {
  const [navbarTransparent, setNavbarTransparent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Reset navbar transparency on route change
    setNavbarTransparent(false);
  }, [location]);

  return (
    <>
      <Navbar isTransparent={navbarTransparent} />
      <Routes>
        <Route path="/" element={<Home setNavbarTransparent={setNavbarTransparent} />} />
        <Route path='/careers' element={<Career />} />
        <Route path='/work' element={<Work />} /> 
        <Route path="/work/:slug" element={<Worksub />} />
        <Route path="/services/:serviceId" element={<Services setNavbarTransparent={setNavbarTransparent} />} />
        <Route path='/services' element={<Services setNavbarTransparent={setNavbarTransparent} />} />
        <Route path='/about' element={<About setNavbarTransparent={setNavbarTransparent} />} />
        <Route path='/clients' element={<People />} />
        <Route path='/news' element={<News />} />
        <Route path="/news/:slug" element={<Report />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <div className='App'>
      <Router>
        <AppContent />
      </Router>
    </div>
  );
};

export default App;