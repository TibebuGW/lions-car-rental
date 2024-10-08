/* eslint-disable no-return-assign */
"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { logo3 } from "@/public/assets";
import Image from "next/image";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import Typewriter from "typewriter-effect";
import "@/styles/hero.css";

const Hero = () => {
  return (
    <div className="py-20">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="w-full h-[300px] flex justify-center items-center relative my-20 z-10 space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-[650px] flex flex-col items-start justify-center">
          <div className="h-[200px]">
            <h1 className="text-transparent text-7xl mb-10 bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">
              <Typewriter
                options={{
                  strings: [
                    "Are you in the UAE?",
                    "Are you looking to rent any type of car?",
                    "Look no further than Lions Car Rental.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>

          <MagicButton
            title="Visit our instagram"
            handleClick={() =>
              (window.location.href = "https://www.instagram.com/lion_car_rental/")
            }
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
        <div className="w-[600px] flex justify-center items-center">
          <Image src={logo3} alt="logo" className="w-9 h-9 object-contain grow-animation" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
