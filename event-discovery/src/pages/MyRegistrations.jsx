
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  Trash2,
  ArrowUpRight,
  ClipboardList,
} from "lucide-react";
import gsap from "gsap";

import "../styles/Registrations.css";

const STORAGE_KEY = "stackly-registrations";

function MyRegistrations() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );
      setRegistrations(Array.isArray(saved) ? saved : []);
    } catch {
      setRegistrations([]);
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".my-registrations-hero-content",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        ".my-registration-card",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    });

    return () => ctx.revert();
  }, [registrations.length]);

  const cancelRegistration = (registrationId) => {
    const updated = registrations.filter(
      (item) => item.registrationId !== registrationId
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setRegistrations(updated);
  };

  return (
    <main className="my-registrations-page">

      {/* HERO */}
      <section className="my-registrations-hero">
        <div className="registration-hero-overlay"></div>

        <div className="my-registrations-hero-content">
          <span>YOUR EVENTS • YOUR EXPERIENCES</span>
          <h1>My <strong>Registrations.</strong></h1>
          <p>Manage your upcoming events and registrations.</p>
        </div>
      </section>

      {/* REGISTRATION LIST */}
      <section className="my-registrations-section">

        <div className="registration-container">

          <div className="my-registrations-heading">
            <span>YOUR EVENT DASHBOARD</span>
            <h2>Registered <strong>Events.</strong></h2>
            <p>
              View and manage the events you have registered for.
            </p>
          </div>

          <div className="registration-count">
            <ClipboardList size={20} />
            {registrations.length} Registered Events
          </div>

          {registrations.length > 0 ? (

            <div className="my-registrations-grid">

              {registrations.map((item) => (

                <article
                  className="my-registration-card"
                  key={item.registrationId}
                >

                  <div className="my-registration-image">
                    <img src={item.image} alt={item.title} />
                    <span>{item.category}</span>
                  </div>

                  <div className="my-registration-info">

                    <h3>{item.title}</h3>

                    <p>
                      <CalendarDays size={16} />
                      {item.date}
                    </p>

                    <p>
                      <MapPin size={16} />
                      {item.location}
                    </p>

                    <div className="registration-user-details">
                      <p><strong>Registered by:</strong> {item.name}</p>
                      <p><strong>Email:</strong> {item.email}</p>
                      <p><strong>Phone:</strong> {item.phone}</p>
                    </div>

                    <button
                      type="button"
                      className="cancel-registration-btn"
                      onClick={() => cancelRegistration(item.registrationId)}
                    >
                      <Trash2 size={16} />
                      Cancel Registration
                    </button>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="registrations-empty">
              <div className="registrations-empty-icon">
                <ClipboardList size={35} />
              </div>

              <h3>No Registrations Yet</h3>

              <p>
                You haven't registered for any events.
                Explore our events and find your next experience.
              </p>

              <Link to="/explore">
                Explore Events <ArrowUpRight size={19} />
              </Link>
            </div>

          )}

        </div>

      </section>

    </main>
  );
}

export default MyRegistrations;
