'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react' // for hamburger icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-transparent text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo and Brand */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png" // Replace with your logo filename
            alt="Innovice Logo"
            width={200}
            height={200}
            className="rounded-full"
          />
          {/* <h1 className="text-xl font-bold">Innovice</h1> */}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-xl">
          <li className="cursor-pointer hover:text-neon">Home </li>
          <li className="cursor-pointer hover:text-neon">About Us</li>
          <li className="cursor-pointer hover:text-neon">Services</li>
          <li className="cursor-pointer hover:text-neon">Contact Us</li>
        </ul>

        {/* Get Started Button (Desktop Only) */}
        <div className="hidden md:block">
          <button className="bg-neon text-black px-6 py-2 rounded-full font-semibold">
            Get Started →
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <a href="#" className="block hover:text-neon">All Pages</a>
          <a href="#" className="block hover:text-neon">About</a>
          <a href="#" className="block hover:text-neon">Pricing</a>
          <a href="#" className="block hover:text-neon">Contact Us</a>
          <button className="mt-4 bg-neon text-black px-6 py-2 rounded-full font-semibold">
            Get Started →
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
