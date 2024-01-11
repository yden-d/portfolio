// App.jsx
import React from "react";
import "./App.css"; // Import your CSS file
import { About } from "./components/About";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Resume } from "./components/Resume";
import { useEffect } from "react";
import { Separator } from "./components/Separator";
import { initializeParticles } from "./particlesInit";
import { useState } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    // Initialize particles.js
    initializeParticles();
  }, []);

  return (
    <div className="main">
      <Header />
      <div className="section">
        <About />
      </div>
      <Separator next='projects' previous='about'/>
      <div className="section">
        <Projects />
      </div>
      <Separator next='resume' previous='projects'/>
      <div className="section">
        <Resume />
      </div>
      <Separator next='contact' previous='resume'/>
      <Contact />
      <div id="particles-js" className="particles-js"></div>
    </div>
  );
};

export default App;
