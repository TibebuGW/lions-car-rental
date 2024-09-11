import React from "react";
import { team } from "@/data";
import { Button } from "./ui/MovingBorders";

const Team = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        The <span className="text-purple">Team</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {team.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="w-full h-[200px] flex justify-start items-center ml-10 gap-10">
              <div className="relative max-h-[120px] max-w-[120px]">
                <img
                  src={card.thumbnail}
                  alt="User Image"
                  className="rounded-full object-cover w-28 h-28"
                />
              </div>
              <div className="space-y-1 font-medium dark:text-white">
                  <div className="text-4xl">{card.title}</div>
                  <div className="text-2xl text-gray-500 dark:text-gray-400">{card.desc}</div>
                </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Team;
