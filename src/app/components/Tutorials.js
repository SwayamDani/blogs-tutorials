'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TutorialCard from './TutorialCard';
import Link from 'next/link';
import { FiArrowRight, FiCode, FiBookOpen, FiFilter } from 'react-icons/fi';
import { getAllTutorials } from '../utils/tutorialData';

export default function Tutorials() {
  const [filter, setFilter] = useState('all');
  
  // Get all tutorials
  const allTutorials = getAllTutorials();
  
  // Filter tutorials based on category
  const filteredTutorials = filter === 'all' 
    ? allTutorials 
    : allTutorials.filter(tutorial => tutorial.category === filter);

  // Get unique categories from tutorials
  const categories = ['all', ...new Set(allTutorials.map(tutorial => tutorial.category))];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="container mx-auto py-20 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Tutorials & <span className="text-green-500">Learning Resources</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          Step-by-step guides to help you master everything from data structures to web development.
          Choose where to begin or continue your learning journey.
        </motion.p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full ${
                filter === category 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
              } hover:bg-green-500 hover:text-white transition duration-300`}
            >
              {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Learning Paths */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Learning Paths</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Data Structures & Algorithms",
              description: "Master fundamental CS concepts with a structured approach to DSA.",
              icon: <FiCode className="text-green-500" size={24} />,
              onClick: () => setFilter('dsa')
            },
            {
              title: "Web Development",
              description: "Build modern, responsive web applications with cutting-edge frameworks.",
              icon: <FiBookOpen className="text-blue-500" size={24} />,
              onClick: () => setFilter('web')
            },
            {
              title: "AI & Machine Learning",
              description: "Explore machine learning fundamentals and practical applications.",
              icon: <FiBookOpen className="text-purple-500" size={24} />,
              onClick: () => setFilter('ai')
            }
          ].map((path, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 cursor-pointer"
              onClick={path.onClick}
            >
              <div className="p-6">
                <div className="mb-4">
                  {path.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{path.description}</p>
                <button
                  className="inline-flex items-center text-green-500 font-medium hover:text-green-600 transition-colors"
                >
                  View Path <FiArrowRight className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Tutorial */}
      {filteredTutorials.length > 0 && (
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl mb-6">
            <span className="text-green-800 dark:text-green-300 font-semibold">Featured Tutorial</span>
          </div>
          <TutorialCard 
            tutorial={filteredTutorials[0]} 
            variant="featured"
          />
        </motion.div>
      )}

      {/* Tutorial Results */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">
          {filter !== 'all' 
            ? `${filter.charAt(0).toUpperCase() + filter.slice(1)} Tutorials` 
            : 'All Tutorials'}
        </h2>
        
        {filteredTutorials.length === 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center shadow-md">
            <h3 className="text-xl font-semibold mb-2">No tutorials found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We don't have any tutorials in this category yet. Please check back soon!
            </p>
            <button 
              onClick={() => setFilter('all')}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              View All Tutorials
            </button>
          </div>
        )}
      </div>

      {/* Tutorials Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {filteredTutorials.slice(1).map((tutorial) => (
          <motion.div key={tutorial.slug} variants={item}>
            <TutorialCard 
              tutorial={tutorial}
            />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Additional Resources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
      >
        <h2 className="text-2xl font-bold mb-6">Additional Learning Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4">External Resources</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <a href="https://en.cppreference.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  C++ Reference Documentation
                </a>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <a href="https://developer.mozilla.org/en-US/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  MDN Web Docs
                </a>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <a href="https://visualgo.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  VisuAlgo - Visualizing Algorithms
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Community Support</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Join our community to get help with tutorials, share your progress, and connect with other learners.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Get In Touch <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </motion.div>
      
      {/* Feedback Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 p-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl shadow-lg text-white"
      >
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">Have suggestions for new tutorials?</h3>
          <p className="mb-6">Let me know what topics you'd like to see covered next. Your feedback helps improve the content for everyone.</p>
          <Link
            href="/contact"
            className="bg-white text-green-600 hover:bg-gray-100 transition-colors font-medium px-6 py-3 rounded-lg inline-block"
          >
            Send Feedback
          </Link>
        </div>
      </motion.div>
    </div>
  );
}