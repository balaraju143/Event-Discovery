
import { Link, useNavigate } from "react-router-dom";
import { House, ArrowLeft } from "lucide-react";

import "../styles/NotFound.css";

import stacklyLogo from "../assets/logo 4.webp";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="event-404-page">

      <div className="event-404-card">

        {/* STACKLY LOGO */}
        <Link to="/" className="event-404-logo">
          <img src={stacklyLogo} alt="Stackly Logo" />
        </Link>

        {/* 404 NUMBER */}
        <div className="event-404-number">
          <span>4</span>

          <div className="event-404-icon">
            <House size={42} strokeWidth={1.3} />
          </div>

          <span>4</span>
        </div>

        {/* LABEL */}
        <span className="event-404-label">
          A LITTLE OFF THE EVENT PATH
        </span>

        {/* CONTENT */}
        <div className="event-404-content">
          <h1>
            This page has
            <span> gone missing.</span>
          </h1>

          <p>
            Looks like this event page is unavailable.
            Let's get you back to discovering exciting events,
            inspiring workshops and unforgettable experiences.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="event-404-buttons">

          <Link to="/" className="event-404-home">
            <House size={17} />
            Back to Home
          </Link>

          <button
            type="button"
            className="event-404-back"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={17} />
            Go Back
          </button>

        </div>

        {/* ERROR CODE */}
        <span className="event-404-code">
          ERROR CODE <strong>404</strong>
        </span>

      </div>

      <p className="event-404-bottom">
        Discover More. Connect Better. Experience Stackly.
      </p>

    </main>
  );
}

export default NotFound;
