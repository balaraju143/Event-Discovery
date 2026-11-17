
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

import "../styles/Navbar.css";
import logo from "../assets/logo 4.webp";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="event-navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Stackly Events Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Explore Events
          </NavLink>

          <NavLink
            to="/registrations"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            My Registrations
          </NavLink>
        </nav>

        {/* Desktop CTA */}
        <Link to="/404" className="navbar-cta">
          <span>Start Planning</span>
          <span className="cta-icon">
            <ArrowUpRight size={20} />
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${menuOpen ? "show" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/explore" onClick={closeMenu}>
          Explore Events
        </NavLink>

        <NavLink to="/registrations" onClick={closeMenu}>
          My Registrations
        </NavLink>

        <Link to="/404" className="mobile-cta" onClick={closeMenu}>
          Start Planning
          <ArrowUpRight size={19} />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
