'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiClock, FiArrowRight, FiCalendar, FiBookmark, FiStar, FiBook } from 'react-icons/fi';
import { motion } from 'framer-motion';

const TutorialCard = ({ 
  tutorial, 
  variant = 'default', // 'default' | 'featured' | 'compact'
  className = '' 
}) => {
  // If no tutorial data is provided, return null or a placeholder
  if (!tutorial || !tutorial.slug) {
    return null;
  }

  const isCompact = variant === 'compact';
  const isFeatured = variant === 'featured';

  const getDifficultyColor = (difficulty) => {
    const colorMap = {
      'Beginner': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      'Intermediate': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
      'Advanced': 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
      'All Levels': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
    };
    return colorMap[difficulty] || 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
  };

  return (
    <Link href={`/tutorials/${tutorial.slug}`} className="block h-full">
      <motion.div 
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        className={`
          h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg 
          hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700
          ${isFeatured ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : 'flex flex-col'}
          ${className}
        `}
      >
        {/* Image */}
        {!isCompact && (
          <div className={`
            relative ${isFeatured ? 'h-64 md:h-auto' : 'h-48'} w-full
          `}>
            {tutorial.imagePath ? (
              <Image
                src={tutorial.imagePath}
                alt={tutorial.title}
                fill
                sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                <FiBook className="text-4xl text-gray-500 dark:text-gray-400" />
              </div>
            )}
            
            {/* Tutorial Badge */}
            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
              <FiBookmark className="mr-1" /> TUTORIAL
            </div>
          </div>
        )}

        {/* Content */}
        <div className={`p-6 ${isFeatured ? 'p-8' : ''} flex flex-col flex-grow`}>
          {/* Tags and Meta */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            {tutorial.category && (
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs">
                {tutorial.category.toUpperCase()}
              </span>
            )}
            {tutorial.difficulty && (
              <span className={`${getDifficultyColor(tutorial.difficulty)} px-3 py-1 rounded-full text-xs`}>
                {tutorial.difficulty}
              </span>
            )}
            {tutorial.readTime && (
              <div className="flex items-center">
                <FiClock className="mr-1" />
                <span>{tutorial.readTime}</span>
              </div>
            )}
            {tutorial.date && (
              <div className="flex items-center">
                <FiCalendar className="mr-1" />
                <span>{tutorial.date}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className={`font-bold mb-3 ${isFeatured ? 'text-3xl' : 'text-xl'}`}>
            {tutorial.title}
          </h3>

          {/* Description */}
          {tutorial.excerpt && (
            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
              {tutorial.excerpt}
            </p>
          )}

          {/* Skills Covered */}
          {tutorial.skills && tutorial.skills.length > 0 && (
            <div className="mb-4">
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 block">Skills covered:</span>
              <div className="flex flex-wrap gap-1">
                {tutorial.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-auto inline-flex items-center font-medium text-green-500 hover:text-green-600 transition-colors">
            {isFeatured ? 'Start Tutorial' : 'View Tutorial'} <FiArrowRight className="ml-2" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default TutorialCard;