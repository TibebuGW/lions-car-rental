import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";

const HelloWorld = () => {
  return (
    <div className="relative bg-black-100s flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5">
      <Navbar />
      <Hero />
      <Grid />
    </div>
  );
};

export default HelloWorld;
