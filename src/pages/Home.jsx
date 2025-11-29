// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import Tab from "../components/Tab";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonial";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Tab />
      <WhyChoose/>
      <Testimonials/>
     
    </>
  );
}
