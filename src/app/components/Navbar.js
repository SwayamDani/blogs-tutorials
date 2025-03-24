'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar({ darkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const pathname = usePathname();
  
  // Check if we're on the blog page
  const isBlogPage = pathname.startsWith('/blog');

  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);
  
  // Navigation items
  const navItems = [
    { id: 'blog', label: 'Blog', path: '/blog' },
    { id: 'tutorials', label: 'Tutorials', path: '/tutorials' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white dark:bg-gray-900 shadow-lg py-3`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-2xl font-bold">
                SD
              </Link>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.id}
                  href={item.path}
                  className={`relative font-medium transition-colors duration-300 ${
                    (isBlogPage && item.id === 'blog') || (!isBlogPage && activeSection === item.id)
                      ? 'text-green-500'
                      : 'text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400'
                  }`}
                >
                  {item.label}
                  {((isBlogPage && item.id === 'blog') || (!isBlogPage && activeSection === item.id)) && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 h-0.5 bg-green-500 w-full"
                      layoutId="navIndicator"
                    />
                  )}
                </Link>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden menu-button focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <FiX className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <motion.div 
          className={`mobile-menu md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: mobileMenuOpen ? 1 : 0,
            y: mobileMenuOpen ? 0 : -20
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-white dark:bg-gray-800 shadow-xl rounded-b-lg mx-4 mt-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-6 ${
                  (isBlogPage && item.id === 'blog') || (!isBlogPage && activeSection === item.id)
                    ? 'bg-green-50 dark:bg-green-900 text-green-500'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
          </div>
        </motion.div>
      </nav>
      
      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)}></div>
      )}
    </>
  );
}