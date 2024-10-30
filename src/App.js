import React from "react";
import Hero from "./components/Hero";
import OurApproach from "./components/OurApproach";
import FeaturedServices from "./components/FeaturedServices";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <OurApproach />
      <FeaturedServices />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
