"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Who’s behind CodeDale?",
    answer:
      "CodeDale is powered by a passionate team of developers, designers, and strategists who care about your success.",
    img: "/nihar.png",
  },
  {
    question: "Do you accept custom requirements?",
    answer: "Absolutely! Every project is unique. We build exactly what your business needs using the right tech.",
    img: "/harsha.png",
  },
  {
    question: "What is your turnaround time?",
    answer: "Projects vary, but we prioritize clear timelines and consistent updates.",
    img: "/nihar.png",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we’re in it for the long haul. We offer maintenance, upgrades, and enhancements.",
    img: "/harsha.png",
  },
  {
    question: "Can you handle branding and marketing too?",
    answer: "Yes—we’ll build your visual identity, online presence, and marketing campaigns for complete impact.",
    img: "/nihar.png",
  },
  {
    question: "What’s your pricing?",
    answer: "Transparent, fair, and tailored to your needs. No hidden fees.",
    img: "/harsha.png",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section id="faqs" className="py-20 max-w-3xl mx-auto px-6">
      <h2 className="text-4xl font-semibold text-center mb-4">
  Frequently Asked Questions
</h2>
<p className="text-center text-gray-600 text-md max-w-2xl mx-auto mb-14 leading-relaxed">
  We get it—curiosity leads to success! Got questions? That’s a great sign. Here are some of the most common ones we receive.
</p>


      <div className="space-y-10">
        {faqs.map((item, index) => (
          <div key={index} className="space-y-4">

            {/* ==== QUESTION ROW (RIGHT SIDE) ==== */}
            <div className="flex justify-end items-center gap-3">

              {/* ROUND PLUS/MINUS BUTTON */}
              <button
                onClick={() => toggle(index)}
                className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-xl shadow-sm cursor-pointer
                hover:bg-gray-50 transition-all duration-300 transform hover:-rotate-20
                `}
              >
                {open === index ? "−" : "+"}
              </button>

              {/* QUESTION BUBBLE */}
              <div
                onClick={() => toggle(index)}
                className={`px-6 py-4 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] max-w-[75%] cursor-pointer transition-colors duration-300 shadow-sm
                  ${open === index ? "bg-black text-white" : "bg-gray-200/50 text-gray-900"}
                `}
              >
                <p className="text-[15px] font-medium">{item.question}</p>
              </div>
            </div>

            {/* ==== ANSWER BUBBLE (LEFT SIDE) ==== */}
            <AnimatePresence>
              {open === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-start gap-3"
                >
                  {/* USER IMAGE */}
                  <img
                    src={item.img}
                    className="w-10 h-10 rounded-full shadow-md object-cover cursor-pointer"
                    alt=""
                  />
                  {/* ANSWER BUBBLE */}
                  <p className="px-6 py-4 rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] bg-white text-black shadow-md max-w-[75%] text-[15px] leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}
      </div>
    </section>
  );
}
