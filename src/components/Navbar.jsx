import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ServiceNav from "./home/ServiceNav";
import logo from "../images/Logo.png";

const navItems = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services", dropdown: true },
  { label: "About us", to: "/about" },
  { label: "Clients", to: "/clients" },
  { label: "News", to: "/news" }
];

const Navbar = ({ isTransparent = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  // Track hover state for desktop dropdown
  const hoverTimeout = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (servicesOpen || menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [servicesOpen, menuOpen]);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
    setServicesOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  // Desktop hover logic for services dropdown
  const handleServicesMouseEnter = () => {
    if (!isMobile) {
      clearTimeout(hoverTimeout.current);
      setServicesOpen(true);
    }
  };

  const handleServicesMouseLeave = () => {
    if (!isMobile) {
      hoverTimeout.current = setTimeout(() => setServicesOpen(false), 150);
    }
  };

  // Mobile click logic for services dropdown
  const handleServicesClick = (e) => {
    e.stopPropagation();
    setServicesOpen((prev) => !prev);
  };

  const navbarActive = servicesOpen || menuOpen;
  const navItemColor =
    menuOpen && isMobile ? "#000" : navbarActive ? "#fff" : undefined;

  return (
    <>
      <nav
        className={`navbar${isTransparent ? " navbar-transparent" : ""}`}
        style={
          navbarActive
            ? { background: "#ED1F24", color: navItemColor }
            : undefined
        }
      >
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        <button
          className={`menu-toggle${menuOpen ? " open" : ""}`}
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links${menuOpen ? " active" : ""}`}>
          {navItems.map((item, idx) =>
            item.dropdown ? (
              <li
                key={idx}
                className="nav-item-dropdown"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button
                  className="nav-item"
                  aria-expanded={servicesOpen}
                  onClick={handleServicesClick}
                  style={{ color: navItemColor }}
                >
                  {item.label}
                </button>
                {/* Mobile dropdown */}
                {isMobile && servicesOpen && (
                  <ul className="mobile-dropdown">
                    <li>
                      <Link
                        to="/services/public-relations"
                        onClick={handleLinkClick}
                      >
                        Public Relations
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/digital-marketing"
                        onClick={handleLinkClick}
                      >
                        Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/strategic-communications"
                        onClick={handleLinkClick}
                      >
                        Strategic Communications
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" onClick={handleLinkClick}>
                        Services Overview
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            ) : (
              <li key={idx}>
                <Link
                  to={item.to}
                  className="nav-item"
                  onClick={handleLinkClick}
                  style={{ color: navItemColor }}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
          <li>
            <Link
              to="/contact"
              className="contact-btn"
              onClick={handleLinkClick}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Desktop overlay for services */}
      {!isMobile && servicesOpen && (
        <div
          className="services-overlay"
          onClick={handleLinkClick}
          onMouseEnter={handleServicesMouseEnter}
          onMouseLeave={handleServicesMouseLeave}
        >
          <ServiceNav />
        </div>
      )}
    </>
  );
};

export default Navbar;
