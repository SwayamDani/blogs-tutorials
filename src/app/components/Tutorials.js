'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TutorialCard from './TutorialCard';
import dsaCourse from '../tutorials/dsa/course-overview';

export default function Tutorials() {
  const [filter, setFilter] = useState('all');
  
  // Define tutorials array directly
  const tutorials = [
    dsaCourse,
  ];
  
  const filteredTutorials = filter === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === filter);

  // Get unique categories
  const categories = ['all', ...new Set(tutorials.map(tutorial => tutorial.category))];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold mb-4 text-center">Tutorials</h2>
      <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
        Step-by-step guides to help you build impressive projects and enhance your skills.
      </p>

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

      {/* Featured Tutorial */}
      {filteredTutorials.length > 0 && (
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <TutorialCard 
            tutorial={filteredTutorials[0]} 
            variant="featured"
          />
        </motion.div>
      )}

      {/* Tutorial Grid */}
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
              key={tutorial.slug}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}