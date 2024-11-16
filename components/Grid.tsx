"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { gridItems } from "@/data";

export default function WobbleCardDemo() {
  return (
    <div className="pt-28 pb-24 sm:pb-32" id="about">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-primary-600">
          {gridItems[0].kicker}
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-lg text-center text-4xl font-medium tracking-normal leading-snug text-gray-950 sm:text-5xl">
          {gridItems[0].headline}
        </p>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-tertiary-700 min-h-[500px] lg:min-h-[300px]">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center sm:bg-top -z-10"
              style={{
                backgroundImage: `url('${gridItems[1].img}')`,
              }}
            ></div>
            <div className="max-w-xs">
              <h2 className="text-right text-balance text-2xl sm:text-3xl font-semibold tracking-normal text-white">
                {gridItems[1].title}
              </h2>
              <p className="mt-2 text-right text-base font-medium text-neutral-50">
                {gridItems[1].description}
              </p>
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px]">
            <div className="flex gap-1 lg:gap-5 w-fit absolute -bottom-3 lg:-bottom-2 -left-3 lg:-left-2">
              {/* Skill list */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-4">
                {(gridItems[2]?.leftList ?? []).map((item, index) => (
                  <span
                    key={index} // It's a good practice to include a key for each mapped item
                    className="py-4 lg:px-6 px-5 text-sm lg:text-base rounded-lg text-center text-white/80 bg-secondary-600 -z-20"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-6 py-4 px-3 rounded-lg text-center bg-secondary-600"></span>
              </div>
              {/* <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div> */}
            </div>
            <div className="max-w-xs">
              <h2 className="text-right text-balance text-2xl sm:text-3xl font-semibold tracking-normal text-white">
                {gridItems[2].title}
              </h2>
              <p className="mt-2 text-right text-base font-medium text-neutral-50">
                {gridItems[2].description}
              </p>
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-tertiary-700">
            <div className="max-w-xs">
              <h2 className="text-right text-balance text-2xl sm:text-3xl font-semibold tracking-normal text-white">
                {gridItems[3].title}
              </h2>
              <p className="mt-2 text-right text-base font-medium text-neutral-50">
                {gridItems[3].description}
              </p>
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-[#364043] min-h-[500px] lg:min-h-[300px]">
            <div
              className="absolute inset-0 w-full sm:w-[400px] h-[300px] sm:h-full -z-10 bg-right-top bg-no-repeat bg-auto sm:bg-contain"
              style={{
                backgroundImage: `url('${gridItems[4].img}')`,
              }}
            ></div>
            <div className="max-w-xs">
              <h2 className="text-right text-balance text-2xl sm:text-3xl font-semibold tracking-normal text-white">
                {gridItems[4].title}
              </h2>
              <p className="mt-2 text-right text-base font-medium text-neutral-50">
                {gridItems[4].description}
              </p>
            </div>
          </WobbleCard>
        </div>
      </div>
    </div>
  );
}
