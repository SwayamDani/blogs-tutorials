'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiHome, FiBookOpen, FiCode, FiGithub, FiSearch, FiUser } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar({ darkMode, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
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
  
  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      // In a real app, you'd redirect to a search results page
      console.log(`Searching for: ${searchTerm}`);
      setSearchTerm('');
      setSearchOpen(false);
    }
  };
  
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
              
              {/* Welcome badge - only shows on larger screens when not scrolled */}
              {!scrolled && (
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="ml-3 hidden md:flex items-center bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full text-sm text-green-800 dark:text-green-300"
                >
                  <FiUser className="mr-1" size={14} /> Welcome!
                </motion.span>
              )}
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
              
              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Search"
              >
                <FiSearch />
              </button>
              
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
              </button>
              
              {/* GitHub Link */}
              <a 
                href="https://github.com/SwayamDani" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <FiGithub className="text-xl" />
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              {/* Search Button Mobile */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                aria-label="Search"
              >
                <FiSearch className="text-xl" />
              </button>
              
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
      
      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-24"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-2xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Search</h3>
                <button onClick={() => setSearchOpen(false)}>
                  <FiX className="text-gray-500" />
                </button>
              </div>
              <form onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for tutorials, blog posts, and more..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="mt-6">
                  <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-2">SUGGESTED TOPICS</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Data Structures', 'Algorithms', 'Web Development', 'Next.js', 'React'].map((topic, index) => (
                      <button
                        key={index}
                        type="button"
                        className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                        onClick={() => setSearchTerm(topic)}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}