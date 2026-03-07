"use client";

import { useEffect, useState } from "react";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const roles = [
  "Senior Software Engineer",
  "Full-Stack Developer"
];

export default function Home() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];

    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + current[charIndex]);
        setCharIndex(charIndex + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
    }
  }, [charIndex, roleIndex]);

  return (
    <>
      <section id="home" className="hero">
        <div className="overlay">
          <div className="hero-content">
            <h1 className="hero-name">Tijana Petrovic</h1>

            <h2 className="hero-role">
              I'm a <span className="typing">{text}</span>
            </h2>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
        <section id="about" className="about">
          <div className="about-container">
            <h2 className="section-title">About</h2>
            <div className="underline"></div>

            <div className="about-content">
              <div className="about-image">
                <img src="/profile.png" alt="about" />
              </div>

              <div className="about-info">
                <h3 style = {{marginBottom: '45px'}}>Senior Full Stack Engineer | React | Node.js | AWS</h3>

                <div className="info-grid">
                  <p><strong>Birthday:</strong> 16 Sep 1995</p>
                  <p><strong>Age:</strong> 31</p>
                  {/* <p><strong>Website:</strong> tijanakelly.dev</p> */}
                  <p><strong>Degree:</strong> BSc Computer Science</p>
                  <p><strong>Phone:</strong> +381 621 45 1077</p>
                  <p><strong>Email:</strong> t.petrovic99595@gmail.com</p>
                  <p><strong>City:</strong> Belgrade, Serbia</p>
                  <p><strong>Freelance:</strong> Available</p>
                </div>

                <p className="about-text">
                  Builds scalable SaaS apps with React, Node.js, and AWS. Focused on backend APIs, performance optimization, and AI automation with OpenAI integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
    </>
  );
}