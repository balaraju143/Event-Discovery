
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Plus,
  Cpu,
  BriefcaseBusiness,
  Palette,
  GraduationCap,
  CalendarDays,
  MapPin,
} from "lucide-react";
import "../styles/Home.css";
import heroBg from "../assets/hero-event-bg.webp";
import speakerImage from "../assets/speaker.webp";

const images = import.meta.glob(
  "../assets/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  }
);

const getImage = (filename) => images[`../assets/${filename}`];



function Home() {
  // EVENT CATEGORIES
  const categories = [
    {
      name: "Technology",
      description: "Explore future innovations",
      icon: Cpu,
    },
    {
      name: "Business",
      description: "Connect with industry leaders",
      icon: BriefcaseBusiness,
    },
    {
      name: "Design",
      description: "Discover creative ideas",
      icon: Palette,
    },
    {
      name: "Education",
      description: "Learn new skills",
      icon: GraduationCap,
    },
  ];

  // FEATURED EVENTS
  const featuredEvents = [
    {
      id: 1,
      title: "Future Tech Innovation Summit",
      category: "Technology",
      date: "December 12, 2026",
      location: "Hyderabad, India",
      image: getImage("innovation-summit.webp"),
    },
    {
      id: 2,
      title: "Global Business Leadership",
      category: "Business",
      date: "December 18, 2026",
      location: "Mumbai, India",
      image: getImage("global.webp"),
    },
    {
      id: 3,
      title: "Creative Design Masterclass",
      category: "Design",
      date: "December 22, 2026",
      location: "Bangalore, India",
      image: getImage("event-hero.webp"),
    },
    {
      id: 4,
      title: "Full Stack Developer Workshop",
      category: "Education",
      date: "January 5, 2027",
      location: "Chennai, India",
      image: getImage("fullstack.webp"),
    },
  ];

  // UPCOMING EVENTS
  const upcomingEvents = [
    {
      id: 5,
      title: "AI & Machine Learning Conference",
      category: "Technology",
      date: "January 12, 2027",
      location: "Hyderabad, India",
      image: getImage("ai-learn.webp"),
    },
    {
      id: 6,
      title: "Entrepreneurship Growth Summit",
      category: "Business",
      date: "January 18, 2027",
      location: "Delhi, India",
      image: getImage("growth.webp"),
    },
    {
      id: 7,
      title: "Digital Product Design Workshop",
      category: "Design",
      date: "January 24, 2027",
      location: "Pune, India",
      image: getImage("digital-workshop.webp"),
    },
    {
      id: 8,
      title: "Modern Web Development Workshop",
      category: "Education",
      date: "February 2, 2027",
      location: "Bangalore, India",
      image: getImage("fullstack.webp"),
    },
  ];

  return (
    <>
      {/* ==============================
          HERO SECTION - YOUR ORIGINAL CODE
      ============================== */}

      <section
        className="event-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="event-hero-overlay"></div>

        <div className="event-hero-container">

          <div className="event-hero-content">

            <span className="hero-tag">
              <span className="hero-tag-dot"></span>
              CONNECT. LEARN. EXPERIENCE.
            </span>

            <h1>
              Discover Amazing
              <span> Events & Workshops.</span>
            </h1>

            <p className="hero-description">
              Explore inspiring events, connect with industry experts,
              learn new skills and create unforgettable experiences
              with the Stackly community.
            </p>

            <div className="hero-buttons">

              <Link to="/explore" className="hero-btn hero-btn-primary">
                Explore Events
                <span><ArrowUpRight size={19} /></span>
              </Link>

              <Link to="/registrations" className="hero-btn hero-btn-outline">
                My Registrations
                <span><ArrowUpRight size={19} /></span>
              </Link>

            </div>

            <div className="speaker-card">

              <div className="speaker-card-top">
                <div className="speaker-avatars">
                  <span>JD</span>
                  <span>AM</span>
                  <span>SK</span>
                  <span>RK</span>
                </div>

                <div className="speaker-add">
                  <Plus size={24} />
                </div>
              </div>

              <h3>40+ Expert Speakers</h3>
              <p>Learn from industry leaders</p>

            </div>

          </div>

          <div className="hero-speaker">
            <div className="speaker-glow"></div>

            <img
              src={speakerImage}
              alt="Stackly event keynote speaker"
            />
          </div>

          <div className="hero-stats">

            <div className="stat-card">
              <h2>70+</h2>
              <p>EVENTS</p>
            </div>

            <div className="stat-card">
              <h2>20+</h2>
              <p>WORKSHOPS</p>
            </div>

            <div className="stat-card">
              <h2>10K+</h2>
              <p>PARTICIPANTS</p>
            </div>

          </div>

        </div>

        <div className="hero-bottom-line"></div>
      </section>


      {/* ==============================
          EVENT CATEGORIES SECTION
      ============================== */}

      <section className="home-category-section">

        <div className="home-section-container">

          <div className="home-section-heading">
            <span>EXPLORE BY INTEREST</span>
            <h2>
              Discover Your <strong>Category.</strong>
            </h2>
            <p>
              Find exciting experiences based on your interests
              and discover opportunities to learn and grow.
            </p>
          </div>

          <div className="home-category-grid">

            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  to="/explore"
                  className="home-category-card"
                  key={category.name}
                >
                  <div className="home-category-icon">
                    <Icon size={27} />
                  </div>

                  <div className="home-category-content">
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </div>

                  <ArrowUpRight
                    className="home-category-arrow"
                    size={20}
                  />
                </Link>
              );
            })}

          </div>

        </div>
      </section>


      {/* ==============================
          FEATURED EVENTS SECTION
      ============================== */}

      <section className="home-featured-section">

        <div className="home-section-container">

          <div className="home-events-heading">
            <div>
              <span>HANDPICKED FOR YOU</span>
              <h2>Featured <strong>Events.</strong></h2>
              <p>
                Discover specially selected events and workshops
                designed to inspire your next big idea.
              </p>
            </div>

            <Link to="/explore" className="home-view-all">
              Explore All Events <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="home-events-grid">

            {featuredEvents.map((event) => (
              <article className="home-event-card" key={event.id}>

                <div className="home-event-image">
                  <img src={event.image} alt={event.title} />
                  <span>{event.category}</span>
                </div>

                <div className="home-event-info">

                  <h3>{event.title}</h3>

                  <p>
                    <CalendarDays size={16} />
                    {event.date}
                  </p>

                  <p>
                    <MapPin size={16} />
                    {event.location}
                  </p>

                  <Link to="/explore" className="home-event-link">
                    View Details <ArrowUpRight size={18} />
                  </Link>

                </div>
              </article>
            ))}

          </div>

        </div>
      </section>


      {/* ==============================
          UPCOMING EVENTS SECTION
      ============================== */}

      <section className="home-upcoming-section">

        <div className="home-section-container">

          <div className="home-events-heading">
            <div>
              <span>MARK YOUR CALENDAR</span>
              <h2>Upcoming <strong>Events.</strong></h2>
              <p>
                Don't miss the upcoming conferences, workshops
                and learning experiences.
              </p>
            </div>

            <Link to="/explore" className="home-view-all">
              View All Events <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="home-events-grid">

            {upcomingEvents.map((event) => (
              <article className="home-event-card" key={event.id}>

                <div className="home-event-image">
                  <img src={event.image} alt={event.title} />
                  <span>{event.category}</span>
                </div>

                <div className="home-event-info">

                  <h3>{event.title}</h3>

                  <p>
                    <CalendarDays size={16} />
                    {event.date}
                  </p>

                  <p>
                    <MapPin size={16} />
                    {event.location}
                  </p>

                  <Link to="/explore" className="home-event-link">
                    View Details <ArrowUpRight size={18} />
                  </Link>

                </div>
              </article>
            ))}

          </div>

          <div className="home-events-cta">
            <div>
              <span>YOUR NEXT EXPERIENCE STARTS HERE</span>
              <h2>Ready to Discover Something Amazing?</h2>
            </div>

            <Link to="/explore">
              Explore Events <ArrowUpRight size={20} />
            </Link>
          </div>

        </div>
      </section>

    </>
  );
}

export default Home;
