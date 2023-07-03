import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesOverview from './components/FeaturesOverview';
import TestimonialSlider from './components/TestimonialSlider';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import { Routes, Route } from "react-router-dom";
import ContactUs from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturesOverview />
              <TestimonialSlider/>
            </>
          }></Route>
        <Route path='start' element={<AboutUs/>}></Route>
        <Route path='Contact' element={<ContactUs/>}></Route>
          </Routes>
      <Footer/>
      
    </div>
  );
}
export default App;
