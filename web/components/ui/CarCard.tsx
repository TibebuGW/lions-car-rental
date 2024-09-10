import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { FaCheckCircle } from "react-icons/fa";

interface Tag {
  name: string;
  color: string;
}

interface Description {
  year: string;
  insured: boolean;
  color: string;
  deposit: string;
  delivery: string;
}

interface ProjectCardProps {
  index: number;
  name: string;
  description: Description;
  tags: Tag[];
  image: string;
}

const CarCard: React.FC<ProjectCardProps> = ({ index, name, description, tags, image }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border-gray-100 border-[1px]"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt="project_image" className="w-full h-full object-cover rounded-2xl" />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <hr className="my-4 border-gray-400" />
          <div className="ml-16 w-full flex flex-col justify-center items-start gap-1">
            <div className="flex justify-center items-center gap-3">
              <FaCheckCircle className="w-[20px] h-[20px] text-green-400" />
              <p className="text-white text-[14px]">{description.year}</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <FaCheckCircle className="w-[20px] h-[20px] text-green-400" />
              <p className="text-white text-[14px]">
                {description.insured ? "Insured" : "Uninsured"}
              </p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <FaCheckCircle className="w-[20px] h-[20px] text-green-400" />
              <p className="text-white text-[14px]">{description.color}</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <FaCheckCircle className="w-[20px] h-[20px] text-green-400" />
              <p className="text-white text-[14px]">{description.deposit}</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <FaCheckCircle className="w-[20px] h-[20px] text-green-400" />
              <p className="text-white text-[14px]">{description.delivery}</p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default CarCard;
