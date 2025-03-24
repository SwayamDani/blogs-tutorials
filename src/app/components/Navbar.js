'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiHome, FiBookOpen, FiCode, FiGithub } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar({ darkMode, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
    { id: 'home', label: 'Home', path: '/', icon: <FiHome className="mr-2" /> },
    { id: 'blog', label: 'Blog', path: '/blog', icon: <FiBookOpen className="mr-2" /> },
    { id: 'tutorials', label: 'Tutorials', path: '/tutorials', icon: <FiCode className="mr-2" /> },
  ];

  // Check if a path is active (current page)
  const isActive = (path) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2' 
            : 'bg-white dark:bg-gray-900 py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold group flex items-center">
              <span className="relative mr-1">
                <span className="absolute -inset-1 rounded-lg bg-green-500 transform -skew-y-3 opacity-70"></span>
                <span className="relative text-white">SD</span>
              </span>
              <span className="text-gray-800 dark:text-white transition-colors duration-300">Byte</span>
              <span className="text-green-500">Hub</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link 
                  key={item.id}
                  href={item.path}
                  className={`relative px-4 py-2 font-medium rounded-lg flex items-center transition-colors duration-300 ${
                    isActive(item.path)
                      ? 'text-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.icon}
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                      layoutId="navIndicator"
                    />
                  )}
                </Link>
              ))}
              
              {/* GitHub Link */}
              <a 
                href="https://github.com/SwayamDani" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <FiGithub className="text-xl" />
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              {/* Theme Toggle Mobile */}
              <button 
                onClick={toggleTheme} 
                className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                aria-label="Toggle theme"
              >
                {darkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
              </button>
              
              <button 
                className="menu-button p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <FiX className="text-2xl" />
                ) : (
                  <FiMenu className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="mobile-menu md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 shadow-xl rounded-b-lg mx-4 mt-2 py-4 overflow-hidden">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center py-3 px-6 ${
                      isActive(item.path)
                        ? 'bg-green-50 dark:bg-green-900/20 text-green-500'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}
                
                {/* GitHub Link Mobile */}
                <a 
                  href="https://github.com/SwayamDani" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center py-3 px-6 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FiGithub className="mr-2" />
                  GitHub
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      
      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
            onClick={() => setMobileMenuOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
}