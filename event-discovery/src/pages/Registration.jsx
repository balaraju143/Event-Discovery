
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, CalendarDays, MapPin, User, Mail, Phone } from "lucide-react";
import gsap from "gsap";

import "../styles/Registrations.css";

const STORAGE_KEY = "stackly-registrations";

function Registration() {
  const location = useLocation();
  const navigate = useNavigate();
  const pageRef = useRef(null);
  const errorTimer = useRef(null);

  const event = location.state?.event;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".registration-hero-content",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        ".registration-form-card",
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, pageRef);

    return () => {
      ctx.revert();
      clearTimeout(errorTimer.current);
    };
  }, []);

  const showErrors = (newErrors) => {
    setErrors(newErrors);
    clearTimeout(errorTimer.current);

    errorTimer.current = setTimeout(() => {
      setErrors({});
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "name") {
      updatedValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    if (name === "phone") {
      updatedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((previous) => ({
      ...previous,
      [name]: updatedValue,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    } else if (!/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(formData.name.trim())) {
      newErrors.name = "Name must contain letters only.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    }

    if (!event) {
      newErrors.event = "Please select an event from Explore Events.";
    }

    if (Object.keys(newErrors).length > 0) {
      showErrors(newErrors);
      return;
    }

    try {
      const saved = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

      const alreadyRegistered = saved.some(
        (item) =>
          item.eventId === event.id &&
          item.email.toLowerCase() === formData.email.trim().toLowerCase()
      );

      if (alreadyRegistered) {
        showErrors({
          email: "You have already registered for this event.",
        });
        return;
      }

      const registration = {
        registrationId: `${event.id}-${Date.now()}`,
        eventId: event.id,
        title: event.title,
        category: event.category,
        date: event.date,
        location: event.location,
        image: event.image,
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone,
        registeredAt: new Date().toISOString(),
      };

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([...saved, registration])
      );

      clearTimeout(errorTimer.current);
      setErrors({});
      setSuccess("Registration successful! Your event has been saved.");

      setFormData({
        name: "",
        email: "",
        phone: "",
      });

    } catch {
      showErrors({
        form: "Unable to save your registration. Please try again.",
      });
    }
  };

  return (
    <main className="registration-page" ref={pageRef}>

      {/* HERO */}
      <section className="registration-hero">
        <div className="registration-hero-overlay"></div>

        <div className="registration-hero-content">
          <span>YOUR NEXT EXPERIENCE STARTS HERE</span>
          <h1>Event <strong>Registration.</strong></h1>
          <p>Complete your details and reserve your place.</p>
        </div>
      </section>

      {/* FORM */}
      <section className="registration-section">

        <div className="registration-container">

          {event ? (
            <div className="registration-form-card">

              <div className="registration-card-heading">
                <span>JOIN THE EXPERIENCE</span>
                <h2>Complete Your Registration</h2>
                <p>Enter your details below to register for this event.</p>
              </div>

              <div className="registration-selected-event">
                <img src={event.image} alt={event.title} />

                <div>
                  <span>{event.category}</span>
                  <h3>{event.title}</h3>

                  <p><CalendarDays size={15} /> {event.date}</p>
                  <p><MapPin size={15} /> {event.location}</p>
                </div>
              </div>

              {success && (
                <div className="registration-success">
                  {success}
                  <button
                    type="button"
                    onClick={() => navigate("/registrations")}
                  >
                    View My Registrations
                  </button>
                </div>
              )}

              {errors.event && (
                <p className="registration-error">{errors.event}</p>
              )}

              {errors.form && (
                <p className="registration-error">{errors.form}</p>
              )}

              <form onSubmit={handleSubmit} noValidate>

                <div className="registration-field">
                  <label htmlFor="reg-name">Full Name</label>
                  <div className="registration-input">
                    <User size={18} />
                    <input
                      id="reg-name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.name && (
                    <p className="registration-error">{errors.name}</p>
                  )}
                </div>

                <div className="registration-field">
                  <label htmlFor="reg-email">Email Address</label>
                  <div className="registration-input">
                    <Mail size={18} />
                    <input
                      id="reg-email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.email && (
                    <p className="registration-error">{errors.email}</p>
                  )}
                </div>

                <div className="registration-field">
                  <label htmlFor="reg-phone">Phone Number</label>
                  <div className="registration-input">
                    <Phone size={18} />
                    <input
                      id="reg-phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter 10-digit mobile number"
                      value={formData.phone}
                      onChange={handleChange}
                      inputMode="numeric"
                    />
                  </div>
                  {errors.phone && (
                    <p className="registration-error">{errors.phone}</p>
                  )}
                </div>

                <button type="submit" className="registration-submit">
                  Confirm Registration <ArrowUpRight size={19} />
                </button>

              </form>

              <p className="registration-note">
                Your registration details will be saved securely in this browser.
              </p>

            </div>
          ) : (
            <div className="registration-no-event">
              <h2>No Event Selected</h2>
              <p>Please choose an event before registering.</p>
              <Link to="/explore">Explore Events <ArrowUpRight size={18} /></Link>
            </div>
          )}

        </div>

      </section>

    </main>
  );
}

export default Registration;
