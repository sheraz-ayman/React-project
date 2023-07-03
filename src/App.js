import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesOverview from './components/FeaturesOverview';
import TestimonialSlider from './components/TestimonialSlider';
import Footer from './components/Footer';
import Post from './components/Post';
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
        <Route path='post' element={<Post/>}></Route>
        <Route path='Contact' element={<ContactUs/>}></Route>
          </Routes>
      <Footer/>
      
    </div>
  );
}
export default App;
