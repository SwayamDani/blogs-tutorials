'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiCode, FiArrowRight } from 'react-icons/fi'
import { getAllTutorials } from '../utils/tutorialData'

export default function FeaturedTutorial() {
  const tutorials = getAllTutorials();
  const featuredTutorial = tutorials[0];

  if (!featuredTutorial) {
    return null;
  }

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      <div className="h-48 bg-green-100 dark:bg-green-900 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <FiCode className="text-6xl text-green-500" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs">
            {featuredTutorial.category}
          </span>
          <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-xs">
            {featuredTutorial.difficulty}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-3">{featuredTutorial.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {featuredTutorial.excerpt}
        </p>
        <Link 
          href={`/tutorials/${featuredTutorial.slug}`}
          className="inline-flex items-center text-green-500 font-medium"
        >
          Start Learning <FiArrowRight className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
}