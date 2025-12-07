"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-[1000] w-full px-5 md:px-15 py-3 flex items-center justify-between bg-white md:bg-transparent rounded-full md:rounded-none shadow-md md:shadow-none mx-3 md:mx-0 mt-3 md:mt-0">


            {/* LEFT - LOGO */}
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={130}
                        height={40}
                        className="cursor-pointer"
                    />
                </Link>
            </div>

            {/* CENTER - MENU (Desktop Only) */}
            <div className="hidden md:flex items-center gap-4 px-3 py-2 rounded-full bg-gradient-to-b from-white to-[#fbfbfd] shadow-md transition">
                <Link href="#services" className="text-[#312b2b] font-medium rounded-[20px] hover:bg-gray-500/10 px-3 py-2 transition">
                    Services
                </Link>
                <Link href="#how-it-works" className="text-[#312b2b] font-medium rounded-[20px] hover:bg-gray-500/10 px-3 py-2 transition">
                    Our Work
                </Link>
                <Link href="#achievements" className="text-[#312b2b] font-medium px-3 py-2 rounded-[20px] hover:bg-gray-500/10 transition">
                    Achievements
                </Link>
                <Link href="#faqs" className="text-[#312b2b] font-medium px-3 py-2 rounded-[20px] hover:bg-gray-500/10 transition">
                    FAQS
                </Link>
                <Link href="#contact" className="text-[#312b2b] font-medium px-3 py-2 rounded-[20px] hover:bg-gray-500/10 transition">
                    Contact
                </Link>
            </div>

            {/* RIGHT - BUTTON (Desktop) */}
            <div className="hidden md:flex items-center justify-center gap-3 ">
                <button className="px-6 py-3 rounded-full text-white bg-[#151619] shadow-md cursor-pointer hover:bg-gray-800 transition-colors duration-300">
                    Book a Call <MdArrowOutward className="inline-block ml-2" />
                </button>
            </div>

            <button
                className="md:hidden relative w-11 h-11 flex flex-col items-center justify-center gap-[6px] z-[1100] bg-gray-100 rounded-full shadow hover:bg-gray-200 transition"

                onClick={() => setOpen(!open)}
                aria-label="Toggle Menu"
            >
                <span className={`w-7 h-[2.5px] bg-black rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[8px]" : ""}`} />
                <span className={`w-7 h-[2.5px] bg-black rounded-full transition-all duration-300 ${open ? "opacity-0" : ""}`} />
                <span className={`w-7 h-[2.5px] bg-black rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[8px]" : ""}`} />
            </button>

            {/* ✅ MOBILE DROPDOWN WITH SLIDE + FADE */}
            <div
                className={`absolute top-full left-0 right-0 
  bg-white md:hidden
  flex flex-col items-center gap-5
  py-6
  rounded-b-3xl
  shadow-lg
  transition-all duration-300 origin-top
  ${open
                        ? "scale-y-100 opacity-100"
                        : "scale-y-0 opacity-0 pointer-events-none"
                    }`}
            >

                <Link href="#services" onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg hover:bg-gray-100/50 transition">
                    Services
                </Link>
                <Link href="#how-it-works" onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg hover:bg-gray-100/50 transition">
                    Our Work
                </Link>
                <Link href="#achievements" onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg hover:bg-gray-100/50 transition">
                    Achievements
                </Link>
                <Link href="#faqs" onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg hover:bg-gray-100/50 transition">
                    FAQS
                </Link>
                <Link href="#contact" onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg hover:bg-gray-100/50 transition">
                    Contact
                </Link>

                <div className="flex gap-4 mt-4">
                    <button className="px-6 py-2 rounded-full font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]">
                        Book a Call
                    </button>
                </div>
            </div>
        </nav>
    );
}
