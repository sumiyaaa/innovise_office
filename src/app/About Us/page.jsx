// app/about/page.jsx (if using App Router)
// or pages/about.jsx (if using Pages Router)

"use client";

import Testimonials from "@/components/Testimonials"; // reuse if already made
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="bg-[#8CC63F] py-20 px-6 text-center text-black">
        <h1 className="text-5xl font-bold mb-4">About Innovice</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Bridging talent and technology through expert ServiceNow training & solutions.
        </p>
      </section>

      {/* Mission + Vision */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-[#8CC63F] mb-4">Our Mission</h2>
          <p>
            To empower individuals and organizations by delivering world-class ServiceNow training, consulting, and automation to help them grow faster and smarter.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#8CC63F] mb-4">Our Vision</h2>
          <p>
            To become the leading force in shaping digital transformation across industries through ServiceNow excellence and community-first learning.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-[#8CC63F]">Why Choose Innovice?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Certified ServiceNow Experts",
            "Hands-on Real Projects",
            "Proven Track Record",
            "Affordable Course Packages",
            "Personalized Mentorship",
            "Corporate-level Solutions",
          ].map((point, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#8CC63F] text-left"
            >
              <h3 className="text-lg font-semibold text-black">{point}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements / Stats */}
      <section className="py-20 px-6 text-center bg-black text-white">
        <h2 className="text-4xl font-bold text-[#8CC63F] mb-12">Our Achievements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-sm text-gray-300">Students Trained</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">25+</h3>
            <p className="text-sm text-gray-300">Corporate Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">40%</h3>
            <p className="text-sm text-gray-300">Avg Process Improvement</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">98%</h3>
            <p className="text-sm text-gray-300">Positive Feedback</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">Ready to Elevate Your Career or Business?</h2>
        <p className="mb-6 text-gray-600">Contact our team today or explore our services & courses to get started.</p>
        <a
          href="/contact"
          className="inline-block bg-[#8CC63F] text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
