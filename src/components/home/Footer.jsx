import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <p className="heading">
          Get the freshest creative & tech updates from us <span className='line-heading'></span>
        </p>
        <form className="input-group">
          <label htmlFor="email">Sign up for our newsletter</label>
          <input type="email" id="email" placeholder="Email" />
          <button type="submit">
            Submit   <span className="arrow-footer"> →</span>
          </button>
        </form>
      </div>

      <div className="footer-main">
        <div className="footer-left">
          <h2>We drive connections between products and people</h2>
          <p>
            We partner with Product Marketing teams in leading technology companies to drive
            customer acquisition, activation, engagement and retention.
          </p>
        </div>
        <div className="footer-right">
          <ul>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/people">People</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/news">News</Link></li>
          </ul>
          <button className="contact-btn" onClick={() => window.location.href = '/contact'}>Contact us</button>
        </div>
      </div>

      <div className="footer-bottom">
        <img src="./images/White.png" alt="logo" className='footerLogo'/>
        <span className="line"></span>
        <div className="footer-main">
          <div className="footer-left">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
          <div className="footer-right">
            <p className="copyright">© 2025 Newsmaker Media Group. All Rights Reserved.
              Using this site | <a href="/privacy-policy"> Privacy & Cookie Policy</a>
            </p>
          </div>
    </footer>
  );
}

export default Footer;
