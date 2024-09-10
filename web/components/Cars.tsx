"use client";

import { cars } from "@/data";
import CarCard from "@/components/ui/CarCard";

const Cars = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small overview of <span className="text-purple">our cars</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        <div className="mt-20 flex flex-wrap justify-between gap-7">
          {cars.map((car: any, index: number) => (
            <CarCard key={`project-${index}`} index={index} {...car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
