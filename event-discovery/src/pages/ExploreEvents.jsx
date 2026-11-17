
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  X,
  
  Users,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/ExploreEvents.css";

gsap.registerPlugin(ScrollTrigger);


const images = import.meta.glob(
  "../assets/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  }
);

const getImage = (filename) => images[`../assets/${filename}`];

const eventsData = [
  {
    id: 1,
    title: "Future Technology Innovation Summit",
    category: "Technology",
    date: "December 12, 2026",
    location: "Hyderabad, India",
    image: getImage("innovation-summit.webp"),
    description: "Explore emerging technologies, artificial intelligence and future digital innovations with industry experts.",
    seats: 120,
  },
  {
    id: 2,
    title: "Global Business Leadership Summit",
    category: "Business",
    date: "December 18, 2026",
    location: "Mumbai, India",
    image: getImage("global.webp"),
    description: "Connect with business leaders and discover strategies for leadership, entrepreneurship and business growth.",
    seats: 85,
  },
  {
    id: 3,
    title: "Creative UI UX Design Workshop",
    category: "Design",
    date: "December 22, 2026",
    location: "Bangalore, India",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=900",
    description: "Learn modern user interface and user experience design techniques through practical activities.",
    seats: 60,
  },
  {
    id: 4,
    title: "Full Stack Development Bootcamp",
    category: "Education",
    date: "January 5, 2027",
    location: "Chennai, India",
    image: getImage("fullstack.webp"),
    description: "Improve your frontend and backend development skills with hands-on learning sessions.",
    seats: 45,
  },
  {
    id: 5,
    title: "Artificial Intelligence Conference",
    category: "Technology",
    date: "January 12, 2027",
    location: "Hyderabad, India",
    image: getImage("ai-learn.webp"),
    description: "Discover practical AI applications, machine learning developments and intelligent automation.",
    seats: 100,
  },
  {
    id: 6,
    title: "Entrepreneurship Growth Workshop",
    category: "Business",
    date: "January 18, 2027",
    location: "Delhi, India",
    image: getImage("growth.webp"),
    description: "Understand startup development, business planning and strategies for growing a successful venture.",
    seats: 70,
  },
  {
    id: 7,
    title: "Digital Product Design Masterclass",
    category: "Design",
    date: "January 24, 2027",
    location: "Pune, India",
    image: getImage("digital-workshop.webp"),
    description: "Explore digital product design, creative workflows and modern design tools.",
    seats: 50,
  },
  {
    id: 8,
    title: "Modern Web Development Workshop",
    category: "Education",
    date: "February 2, 2027",
    location: "Bangalore, India",
    image: getImage("fullstack.webp"),
    description: "Build your knowledge of modern web development with practical coding exercises.",
    seats: 55,
  },
  {
    id: 9,
    title: "Cloud Computing Technology Forum",
    category: "Technology",
    date: "February 10, 2027",
    location: "Chennai, India",
    image: getImage("cloud computing.webp"),
    description: "Learn about cloud infrastructure, deployment technologies and modern cloud solutions.",
    seats: 90,
  },
  {
    id: 10,
    title: "Creative Branding & Marketing Summit",
    category: "Business",
    date: "February 18, 2027",
    location: "Mumbai, India",
    image: getImage("markting.webp"),
    description: "Discover branding strategies, digital marketing and customer engagement techniques.",
    seats: 65,
  },
  {
    id: 11,
    title: "Graphic Design Creative Workshop",
    category: "Design",
    date: "February 24, 2027",
    location: "Hyderabad, India",
    image: getImage("designer.webp"),
    description: "Develop your creative skills through visual communication and graphic design exercises.",
    seats: 40,
  },
  {
    id: 12,
    title: "Professional Career Development",
    category: "Education",
    date: "March 5, 2027",
    location: "Delhi, India",
    image: getImage("career.webp"),
    description: "Build professional skills, prepare for career opportunities and learn from experienced mentors.",
    seats: 75,
  },
];

const categories = [
  "All Events",
  "Technology",
  "Business",
  "Design",
  "Education",
];

function ExploreEvents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Events");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const pageRef = useRef(null);

  const filteredEvents = useMemo(() => {
    return eventsData.filter((event) => {
      const matchesSearch = event.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Events" ||
        event.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // GSAP SCROLL REVEAL ANIMATIONS
  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(
        ".explore-hero-content",
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".explore-toolbar",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".explore-toolbar",
            start: "top 90%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".explore-event-card",
        { opacity: 0, x: (index) => index % 2 === 0 ? -55 : 55 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          stagger: 0.13,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".explore-events-grid",
            start: "top 85%",
            once: true,
          },
        }
      );

    }, pageRef);

    return () => ctx.revert();
  }, [filteredEvents]);

  return (
    <main className="explore-page" ref={pageRef}>

      {/* =================================
          EXPLORE HERO
      ================================= */}

      <section className="explore-hero">

        <div className="explore-hero-overlay"></div>

        <div className="explore-hero-content">
          <span>DISCOVER • CONNECT • EXPERIENCE</span>

          <h1>
            Explore Amazing
            <strong> Events.</strong>
          </h1>

          <p>
            Find inspiring conferences, creative workshops
            and unforgettable experiences.
          </p>

          <a href="#explore-list" className="explore-hero-btn">
            Discover Events <ArrowUpRight size={19} />
          </a>
        </div>

      </section>


      {/* =================================
          EVENTS LIST AND FILTERS
      ================================= */}

      <section className="explore-list-section" id="explore-list">

        <div className="explore-container">

          <div className="explore-section-heading">
            <span>FIND YOUR NEXT EXPERIENCE</span>
            <h2>
              Discover All <strong>Events.</strong>
            </h2>
            <p>
              Search and explore events that match your interests.
            </p>
          </div>

          {/* SEARCH AND CATEGORY FILTER */}

          <div className="explore-toolbar">

            <div className="explore-search">
              <Search size={20} />

              <input
                type="text"
                placeholder="Search events by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            <div className="explore-category-filter">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={
                    selectedCategory === category ? "active" : ""
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

          </div>

          {/* EVENT COUNT */}

          <div className="explore-results-heading">
            <h3>Available Events</h3>
            <span>{filteredEvents.length} Events Found</span>
          </div>

          {/* DYNAMIC EVENT CARDS */}

          {filteredEvents.length > 0 ? (

            <div className="explore-events-grid">

              {filteredEvents.map((event) => (

                <article className="explore-event-card" key={event.id}>

                  <div className="explore-event-image">
                    <img src={event.image} alt={event.title} />

                    <span>{event.category}</span>
                  </div>

                  <div className="explore-event-info">

                    <h3>{event.title}</h3>

                    <p>
                      <CalendarDays size={16} />
                      {event.date}
                    </p>

                    <p>
                      <MapPin size={16} />
                      {event.location}
                    </p>

                    <div className="explore-event-bottom">
                      <span className="explore-seats">
                        <Users size={15} />
                        {event.seats} seats
                      </span>

                      <button
                        type="button"
                        onClick={() => setSelectedEvent(event)}
                      >
                        View Details
                        <ArrowUpRight size={17} />
                      </button>
                    </div>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="explore-empty">
              <Search size={35} />
              <h3>No Events Found</h3>
              <p>Try another search term or choose a different category.</p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Events");
                }}
              >
                Clear Filters
              </button>
            </div>

          )}

        </div>

      </section>


      {/* =================================
          EVENT DETAILS MODAL
      ================================= */}

      {selectedEvent && (

        <div
          className="event-modal-backdrop"
          onClick={() => setSelectedEvent(null)}
        >

          <div
            className="event-details-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Event details"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              className="event-modal-close"
              onClick={() => setSelectedEvent(null)}
              aria-label="Close event details"
            >
              <X size={22} />
            </button>

            <img
              className="event-modal-image"
              src={selectedEvent.image}
              alt={selectedEvent.title}
            />

            <div className="event-modal-content">

              <span className="event-modal-category">
                {selectedEvent.category}
              </span>

              <h2>{selectedEvent.title}</h2>

              <p>
                <CalendarDays size={17} />
                {selectedEvent.date}
              </p>

              <p>
                <MapPin size={17} />
                {selectedEvent.location}
              </p>

              <p>
                <Users size={17} />
                {selectedEvent.seats} sample seats available
              </p>

              <p className="event-modal-description">
                {selectedEvent.description}
              </p>

              <Link
                to="/register"
                state={{ event: selectedEvent }}
                className="event-register-btn"
              >
                Register Now <ArrowUpRight size={19} />
              </Link>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default ExploreEvents;
