// import React from 'react'

// const HeroSection = () => {
//   return (
//     <section className="flex flex-col items-center justify-center text-center px-6 py-20">
//       <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
//         The Future of<br />
//         <span className="text-neon">The Next-Gen Chatbot</span>
//       </h1>
//       <p className="mt-6 text-lg max-w-2xl text-gray-300">
//        At Innovise, we deliver modern IT solutions using ServiceNow to
//             help businesses streamline workflows, automate operations, and
//             grow smarter.
//       </p>
//       <div className="mt-8 flex gap-4">
//         <button className="bg-neon text-black px-6 py-3 rounded-full font-semibold">
//           Get Started →
//         </button>
//         <button className="border border-white px-6 py-3 rounded-full font-semibold">
//           Request a Demo
//         </button>
//       </div>
//     </section>
//   )
// }

// export default HeroSection

















"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Link from "next/link";

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const buttonHover = {
  scale: 1.05,
  backgroundColor: "#7ab934",
  color: "#ffffff",
  transition: { duration: 0.3 },
};

const primaryColor = "#8CC63F";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl sm:text-5xl font-extrabold leading-tight mb-8"
            variants={fadeInUp}
          >
            Empowering Businesses <br />
            with{" "}
            <span style={{ color: primaryColor }}>
              <Typewriter
                words={[
                  "Intelligent ServiceNow Solutions",
                  "Powerful IT Automation",
                  "Smart Digital Workflows",
                ]}
                loop={0}
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-gray-500 mb-8"
            variants={fadeInUp}
          >
            At Innovise, we deliver modern IT solutions using ServiceNow to
            help businesses streamline workflows, automate operations, and
            grow smarter.
          </motion.p>

          <Link href="/about-us">
            <motion.button
              className="px-8 py-3 text-base sm:text-lg font-semibold rounded-full shadow-md transition-all duration-300 ease-in-out"
              style={{ backgroundColor: primaryColor, color: "#0d0c11" }}
              variants={fadeInUp}
              whileHover={buttonHover}
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
