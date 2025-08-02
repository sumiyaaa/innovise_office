// components/Footer.jsx

import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/public/images/logo.png" // 🔁 Put your logo in public/logo.png
            alt="Innovice Logo"
            width={160}
            height={60}
            className="mb-4"
          />
          <p className="text-gray-400">
            Empowering students and businesses with expert ServiceNow training, implementation & innovation.
          </p>
        </div>

        {/* Right: Links & Social */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h4 className="text-xl font-semibold text-[#8CC63F] mb-4">Quick Links</h4>
          <ul className="space-y-2 mb-6 text-gray-300">
            <li><a href="#services" className="hover:text-[#8CC63F]">Our Services</a></li>
            <li><a href="#testimonials" className="hover:text-[#8CC63F]">Success Stories</a></li>
            <li><a href="#courses" className="hover:text-[#8CC63F]">Courses</a></li>
            <li><a href="#contact" className="hover:text-[#8CC63F]">Contact Us</a></li>
          </ul>

          <div className="flex justify-center md:justify-end gap-4 mb-4">
            <a href="#" className="hover:text-[#8CC63F]"><Facebook /></a>
            <a href="#" className="hover:text-[#8CC63F]"><Instagram /></a>
            <a href="#" className="hover:text-[#8CC63F]"><Twitter /></a>
            <a href="#" className="hover:text-[#8CC63F]"><Linkedin /></a>
          </div>

          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Innovice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
