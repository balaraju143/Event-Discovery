/*
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ExploreEvents from "./pages/ExploreEvents";
import MyRegistrations from "./pages/MyRegistrations";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExploreEvents />} />
          <Route path="/registrations" element={<MyRegistrations />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;*/

/*
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";

import Home from "./pages/Home";
import ExploreEvents from "./pages/ExploreEvents";
import MyRegistrations from "./pages/MyRegistrations";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/explore" element={<ExploreEvents />} />
        <Route path="/register" element={<Registration />} />
       <Route
          path="/registrations"
          element={<MyRegistrations />}
        />
      <Route path="/404" element={<NotFound />} />
       <Route path="*" element={<NotFound />} />
      </Routes>
    

      <Footer />
    </>
  );
}

export default App;*/


import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";

import Home from "./pages/Home";
import ExploreEvents from "./pages/ExploreEvents";
import MyRegistrations from "./pages/MyRegistrations";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  const location = useLocation();

  const is404Page =
    location.pathname === "/404" ||
    !["/", "/explore", "/register", "/registrations"].includes(
      location.pathname
    );

  return (
    <>
      {!is404Page && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/explore" element={<ExploreEvents />} />

        <Route path="/register" element={<Registration />} />

        <Route
          path="/registrations"
          element={<MyRegistrations />}
        />

        <Route path="/404" element={<NotFound />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {!is404Page && <Footer />}
    </>
  );
}

export default App;

