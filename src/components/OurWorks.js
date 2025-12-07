"use client";

import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const projects = [
  {
    id: 1,
    title: "Finance Web Platform",
    image: "/TFS.jpg",
    description: "A fintech platform for loan & finance management.",
    tech: "Next.js, Tailwind, Node.js",
    logo: "/TFSLogo.jpg",
  },
  {
    id: 2,
    title: "E-Commerce Store",
    image: "/conquer.jpg",
    description: "Modern e-commerce experience with cart & payments.",
    tech: "React, Stripe, Firebase",
    logo: "/conquer_logo.jpg",
  },
];

export default function OurWorks() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="how-it-works"
      className="py-24 w-full flex flex-col items-center text-center overflow-x-hidden"
    >
      {/* TITLE */}
      <h2 className="text-4xl font-semibold mb-2">Our Works</h2>
      <p className="text-gray-500 mb-14">
        Still confused about us? Our work speaks for itself.
      </p>

      {/* ✅ RESPONSIVE ROW */}
      <div className="
        flex flex-col lg:flex-row 
        gap-10 lg:gap-[80px] 
        justify-center items-center 
        w-full px-4
      ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="
              relative group overflow-hidden
              w-[90vw] sm:w-[380px] md:w-[420px] lg:w-[450px]
              h-[420px] sm:h-[480px] md:h-[520px] lg:h-[550px]
              rounded-[28px] shadow-xl
              flex-shrink-0
            "
          >
            {/* IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              className="
                w-full h-full object-cover
                transition-transform duration-500 ease-in-out
                group-hover:scale-110
              "
            />

            {/* ✅ BOTTOM HOVER BAR */}
            <div
              className="
                absolute bottom-4 left-1/2 -translate-x-1/2
                w-[90%] h-[60px]
                rounded-[30px]
                flex items-center justify-between
                px-1

                backdrop-blur-md bg-black/10
                border border-white/30

                translate-y-full opacity-0
                group-hover:translate-y-0 group-hover:opacity-100

                transition-all duration-300 ease-in-out
              "
            >
              {/* LEFT LOGO */}
              <img
                src={project.logo}
                alt="logo"
                className="w-[80px] h-[30px] object-contain"
              />

              {/* WHITE BUTTON */}
              <button className="bg-white text-black px-4 py-3 rounded-[30px] font-semibold shadow cursor-pointer">
                View Project <MdArrowOutward className="inline-block ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
