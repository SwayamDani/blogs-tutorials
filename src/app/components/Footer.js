'use client'
import React from 'react';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiCode, FiBook, FiHome } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and intro */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold group flex items-center mb-4">
              <span className="relative mr-1">
                <span className="absolute -inset-1 rounded-lg bg-green-500 transform -skew-y-3 opacity-70"></span>
                <span className="relative text-white">SD</span>
              </span>
              <span className="text-gray-800 dark:text-white transition-colors duration-300">Byte</span>
              <span className="text-green-500">Hub</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              A platform dedicated to helping you master programming, data structures, algorithms, and web development through practical tutorials and insights.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/SwayamDani" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/swayam-dani-554091299" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a 
                href="mailto:contact@swayamdani.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors flex items-center"
                >
                  <FiHome className="mr-2" size={16} /> Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors flex items-center"
                >
                  <FiBook className="mr-2" size={16} /> Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/tutorials" 
                  className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors flex items-center"
                >
                  <FiCode className="mr-2" size={16} /> Tutorials
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors flex items-center"
                >
                  <FiMail className="mr-2" size={16} /> Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Categories</h2>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/tutorials?category=dsa" 
                  className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                >
                  Data Structures & Algorithms
                </Link>
              </li>
              <li>
                <Link 
                  href="/tutorials?category=web" 
                  className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog?category=ai" 
                  className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                >
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog?category=security" 
                  className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                >
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Stay Updated</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to receive updates on new tutorials and articles.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-lg transition-colors"
                >
                  Join
                </button>
              </div>
            </form>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No spam ever. You can unsubscribe at any time.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} ByteHub by Swayam Dani. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <button 
              onClick={scrollToTop}
              className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors flex items-center"
              aria-label="Back to top"
            >
              <FiArrowUp className="mr-2" /> Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}