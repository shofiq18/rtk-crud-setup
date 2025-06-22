import Image from "next/image";
import React from "react";

export default function ResumeCreate() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex items-center mr-6  ">
        <Image
          src="https://i.ibb.co/3b62f7j/320828-P9-LK04-715.jpg"
          alt="Sample Resume"
          width={578}
          height={499}
          className="rounded-2xl"
          style={{ height: "499px" }}
        />
      </div>

      <div className="text-left flex-1 w-[818px] h-[499px]">
        <h1 className="text-7xl font-bold text-[#28C76F] mb-4 leading-[1.24]">
          <span className="text-gray-900">Create Your</span> AI- <br />
          Powered Resume
        </h1>

        <h3 className="text-xl text-gray-700 mb-10 leading-[1.6]">
          Let our AI technology help you build a professional resume tailored{" "}
          <br />
          to your skills, experience, and career goals.
        </h3>

        <p className="text-gray-400 text-sm mb-12 leading-[1.6]">
          Follow these simple steps to create a standout resume that will get
          you <br /> noticed by top employers.
        </p>
        <button className="px-18 py-4 bg-[#28C76F] text-[#FCFCFC] font-semibold rounded-lg hover:bg-green-700">
          Start Now
        </button>
      </div>
    </div>
  );
}
