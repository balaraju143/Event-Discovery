
import { Link } from "react-router-dom";
import "../styles/Footer.css";

import stacklyLogo from "../assets/logo 4.webp";

function Footer() {
  return (
    <footer className="stackly-footer">

      {/* FOOTER TOP INTRO */}
      <div className="footer-top">

        <div className="footer-top-left">
          <h2>
            Discover Experiences.
            <br />
            Create <span>Memories.</span>
          </h2>
        </div>

        <div className="footer-top-right">
          <p>
            Discover inspiring events, connect with amazing people,
            explore creative workshops and make every experience
            unforgettable with Stackly.
          </p>
        </div>

      </div>

      <div className="footer-divider"></div>

      {/* FOOTER MAIN CONTENT */}
      <div className="footer-main">

        {/* BRAND COLUMN */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <img src={stacklyLogo} alt="Stackly Logo" />
          </Link>

          <p className="footer-brand-description">
            Discover exciting events, learn new skills and connect
            with a community of people who inspire you.
          </p>

          {/* SOCIAL ICONS */}
          <div className="footer-socials">

            <Link to="/404" aria-label="Google">
              <i className="fa-brands fa-google"></i>
            </Link>

            <Link to="/404" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>

            <Link to="/404" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </Link>

            <Link to="/404" aria-label="X">
              <i className="fa-brands fa-x-twitter"></i>
            </Link>

          </div>

        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">

          <h3>Explore</h3>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/explore">Explore Events</Link></li>
            <li><Link to="/registrations">My Registrations</Link></li>
            <li><Link to="/404">About Us</Link></li>
            <li><Link to="/404">Our Community</Link></li>
            <li><Link to="/404">Blog</Link></li>
          </ul>

        </div>

        {/* HELP COLUMN */}
        <div className="footer-column">

          <h3>Help & Support</h3>

          <ul>
            <li><Link to="/404">FAQs</Link></li>
            <li><Link to="/404">Event Guidelines</Link></li>
            <li><Link to="/404">Registration Help</Link></li>
            <li><Link to="/404">Privacy Policy</Link></li>
            <li><Link to="/404">Terms & Conditions</Link></li>
            <li><Link to="/404">Customer Support</Link></li>
          </ul>

        </div>

        {/* CONTACT COLUMN */}
        <div className="footer-column footer-contact">

          <h3>Contact Us</h3>

          <div className="footer-contact-item">
            <span className="material-symbols-outlined">
              location_on
            </span>

            <p>
              Stackly Event Community,
              <br />
              Your Business Address,
              <br />
              Your City, India.
            </p>
          </div>

          <div className="footer-contact-item">
            <span className="material-symbols-outlined">
              call
            </span>

            <a href="./404">
              +91 96528 22314
            </a>
          </div>

          <div className="footer-contact-item">
            <span className="material-symbols-outlined">
              mail
            </span>

            <a href="./404">
              help@stackly.com
            </a>
          </div>

          <div className="footer-contact-item">
            <span className="material-symbols-outlined">
              schedule
            </span>

            <p>
              Monday – Saturday
              <br />
              10:00 AM – 7:00 PM
            </p>
          </div>

        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 Stackly. All Rights Reserved.
        </p>

        <div className="footer-bottom-links">
          <Link to="/404">Terms & Conditions</Link>
          <Link to="/404">Privacy Policy</Link>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
