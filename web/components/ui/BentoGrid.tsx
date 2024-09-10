"use client";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/data/confetti.json";
import { FaCheckCircle } from "react-icons/fa";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = [
    { name: "Toyota", image: "/assets/car_logos/Toyota.jpg" },
    { name: "Ferrari", image: "/assets/car_logos/Ferrari.jpg" },
    { name: "Maserati", image: "/assets/car_logos/Maserati.jpg" },
  ];
  const rightLists = [
    { name: "Lamborghini", image: "/assets/car_logos/Lamborghini.jpg" },
    { name: "Rolls Royce", image: "/assets/car_logos/Rolls_Royce.jpg" },
    { name: "Hyundai", image: "/assets/car_logos/Hyundai.jpg" },
  ];
  const uniqueFeatures = ["Fast Response", "Variety of Options", "Free Delivery"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // const handleCopy = () => {
  //   const text = "hsu@jsmastery.pro";
  //   navigator.clipboard.writeText(text);
  //   setCopied(true);
  // };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img src={img} alt={img} className={cn(imgClassName, "object-cover object-center")} />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"} `}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-contain object-center w-[120px] h-[120px]"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            `group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-10 lg:px-10 ${id === 2 ? "py-3" : "py-10"}`
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-50 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300 */}
          {/* remove mb-2 mt-2 */}
          <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>{title}</div>

          {/* for the github 3d globe */}
          {id === 2 && (
            <div className="w-full flex flex-col justify-center items-start py-3 pl-20">
              {uniqueFeatures.map((feature, i) => (
                <span className="py-1 flex justify-center items-center gap-2" key={i}>
                  {" "}
                  <FaCheckCircle className="w-[35px] h-[35px] text-green-400" />
                  {feature}
                </span>
              ))}
            </div>
          )}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-0 lg:-right-0">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-1 py-2 px-1 text-xs lg:text-base opacity-50 flex items-center justify-center gap-2
                    lg:opacity-100 rounded-lg text-center bg-black"
                  >
                    <Image src={item.image} alt={item.name} width={20} height={20} />
                    {item.name}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-1 py-2 px-1 text-xs lg:text-base opacity-50 flex items-center justify-center gap-2
                  lg:opacity-100 rounded-lg text-center bg-black"
                  >
                    <Image src={item.image} alt={item.name} width={20} height={20} />
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title="Show Location"
                handleClick={() =>
                  (window.location.href = "https://maps.apple.com/place?address=Dubai%2C+United+Arab+Emirates&auid=10070693949116118154&ll=25.214465%2C55.276649&lsp=6489&q=Dubai&t=m")
                }
                icon={<FaLocationArrow />}
                position="right"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
