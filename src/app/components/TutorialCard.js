'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiClock, FiArrowRight } from 'react-icons/fi';

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

  return (
    <Link href={`../tutorials/${tutorial.slug}`} className="block">
      <div className={`
        bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg 
        hover:shadow-xl transition-all duration-300
        ${isFeatured ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : ''}
        ${className}
      `}>
        {/* Image */}
        {!isCompact && tutorial.imagePath && (
          <div className={`
            relative ${isFeatured ? 'h-64 md:h-auto' : 'h-48'} w-full
          `}>
            <Image
              src={tutorial.imagePath}
              alt={tutorial.title}
              fill
              sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}

        {/* Content */}
        <div className={`p-6 ${isFeatured ? 'p-8' : ''}`}>
          {/* Tags and Meta */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            {isFeatured && (
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
                Featured
              </span>
            )}
            {tutorial.difficulty && (
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                {tutorial.difficulty}
              </span>
            )}
            {tutorial.readTime && (
              <div className="flex items-center">
                <FiClock className="mr-1" />
                <span>{tutorial.readTime}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className={`font-bold mb-3 ${isFeatured ? 'text-3xl' : 'text-xl'}`}>
            {tutorial.title}
          </h3>

          {/* Description */}
          {tutorial.excerpt && (
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {tutorial.excerpt}
            </p>
          )}

          {/* Call to Action */}
          <div className="inline-flex items-center text-green-500 font-medium">
            {isFeatured ? 'Start Tutorial' : 'Learn More'} <FiArrowRight className="ml-2" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TutorialCard;