import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title"> Share and Discover Inspiring Stories</h1>
        <Link to="Post" className="CTA-btn">
            Get started
          </Link>
      </div>
    </div>
  );
};

export default Hero;
