import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import OurCourses from "./components/OurCourses";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import OurTeachers from "./components/OurTeachers";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function App() {
  const [scrolled, setScrolled] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
    return () => window.removeEventListener("scroll", changeNavbar);
  });

  const handleNotAvailable = () => {
    toast.error("Currently Not Available.");
  };

  return (
    <>
      <div className="bg-hero-bg bg-no-repeat bg-cover bg-center">
        <Header scrolled={scrolled} handleNotAvailable={handleNotAvailable} />
        <Hero handleNotAvailable={handleNotAvailable} />
      </div>
      <Services />
      <OurCourses />
      <div className="bg-hero-bg bg-no-repeat bg-cover bg-center">
        <Benefits />
      </div>
      <Testimonials />
      <div className="bg-hero-bg bg-no-repeat bg-cover bg-center">
        <OurTeachers />
      </div>
      <NewsLetter handleNotAvailable={handleNotAvailable} />
      <div className="bg-hero-bg bg-no-repeat bg-cover bg-center">
        <Footer />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        toastStyle={{
          margin: "0.2rem",
          maxWidth: "90vw",
          fontSize: "0.9rem",
        }}
        containerStyle={{
          padding: "0.5rem",
        }}
      />
    </>
  );
}

export default App;
