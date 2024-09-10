import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Cars from "@/components/Cars";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const HelloWorld = () => {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5">
      <Navbar />
      <Hero />
      <Grid />
      <Cars />
      <Testimonials />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HelloWorld;
