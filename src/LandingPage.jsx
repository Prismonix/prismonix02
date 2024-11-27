import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="navbar">
        <nav>
          <ul>
            <li><a href="#about">About us</a></li>
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact us</a></li>
          </ul>
        </nav>
        <div className="auth-links">
          <a href="#join">Join Us</a>
          <a href="#signin">Sign in</a>
        </div>
      </header>
      <main className="hero-section">
        <h1>Where Innovation meets opportunity</h1>
        <p>
          Innovation begins here! At Prismonix, we are revolutionizing the way ideas
          come to life by bridging the gap between innovators, developers, and
          investors. Our platform is designed to empower visionaries with
          groundbreaking ideas, connect skilled developers to exciting projects, and
          provide investors with access to promising ventures.
        </p>
        <button className="cta-button">Start your journey</button>
      </main>
    </div>
  );
};

export default LandingPage;
