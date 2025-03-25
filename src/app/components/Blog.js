'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { getAllBlogPosts, getFeaturedPosts, getBlogPostsByCategory } from '../utils/blogData'
import Link from 'next/link'
import Image from 'next/image'
import { FiCalendar, FiClock, FiArrowRight, FiSearch, FiFilter, FiX } from 'react-icons/fi'

export default function Blog() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get all blog posts
  const allPosts = getAllBlogPosts();
  
  // Get featured posts
  const featuredPost = getFeaturedPosts(1)[0];
  
  // Filter posts based on category and search term
  const filteredPosts = allPosts.filter(post => {
    const categoryMatch = filter === 'all' || post.category === filter;
    const searchMatch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  // Get unique categories from posts
  const categories = ['all', ...new Set(allPosts.map(post => post.category))];

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
      {/* Header with welcoming message */}
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Welcome to the <span className="text-green-500">ByteHub</span> Blog
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          Explore insights, tutorials, and the latest in tech. From beginner guides to advanced concepts, 
          there's something here for every stage of your learning journey.
        </motion.p>
      </div>

      {/* Search and Filter Controls */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row gap-4 mb-12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        {/* Search Bar */}
        <div className="relative flex-grow mb-4 md:mb-0">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <FiX size={18} />
            </button>
          )}
        </div>
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-gray-600 dark:text-gray-400 mr-2 whitespace-nowrap flex items-center">
            <FiFilter className="mr-1" /> Filter:
          </span>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-1 rounded-full text-sm ${
                filter === category 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
              } hover:bg-green-500 hover:text-white transition duration-300`}
            >
              {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Featured Post */}
      {featuredPost && (
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl mb-6">
            <span className="text-green-800 dark:text-green-300 font-semibold">Featured Article</span>
          </div>
          <Link href={`/blog/${featuredPost.slug}`} className="block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="relative h-64 md:h-auto">
                <div className="w-full h-full relative rounded-t-xl md:rounded-l-xl md:rounded-tr-none overflow-hidden">
                  {featuredPost.imagePath ? (
                    <Image
                      src={featuredPost.imagePath}
                      alt={featuredPost.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">{featuredPost.category.charAt(0).toUpperCase()}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <div className="flex items-center">
                    <FiCalendar className="mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FiClock className="mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{featuredPost.excerpt}</p>
                <div className="inline-flex items-center text-green-500 font-medium hover:text-green-600 transition-colors">
                  Read Article <FiArrowRight className="ml-2" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      )}
      
      {/* Blog Posts Results */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">
          {searchTerm 
            ? `Search Results ${filteredPosts.length > 0 ? `(${filteredPosts.length})` : ''}` 
            : filter !== 'all' 
              ? `${filter.charAt(0).toUpperCase() + filter.slice(1)} Articles` 
              : 'All Articles'}
        </h2>
        
        {filteredPosts.length === 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center shadow-md">
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button 
              onClick={() => {setSearchTerm(''); setFilter('all');}}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Blog Posts Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {filteredPosts.map((post) => (
          <motion.div
            key={post.slug}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
            variants={item}
          >
            <Link href={`/blog/${post.slug}`} className="block flex-grow">
              <div className="relative h-48 w-full">
                {post.imagePath ? (
                  <Image
                    src={post.imagePath}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 text-2xl font-bold">{post.category.charAt(0).toUpperCase()}</span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className={`bg-${getCategoryColor(post.category)}-100 dark:bg-${getCategoryColor(post.category)}-900 
                    text-${getCategoryColor(post.category)}-800 dark:text-${getCategoryColor(post.category)}-200 
                    px-3 py-1 rounded-full text-xs font-medium`}>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <FiCalendar className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FiClock className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
              </div>
            </Link>
            <div className="p-6 pt-0 mt-auto">
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-green-500 font-medium hover:text-green-600 transition-colors"
              >
                Read More <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 p-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl shadow-lg text-white"
      >
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">Want more programming content?</h3>
          <p className="mb-6">Subscribe to get notified when new articles are published. No spam, just quality content to help you on your learning journey.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-lg flex-grow text-gray-900 focus:outline-2 focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-green-600 hover:bg-gray-100 transition-colors font-medium px-6 py-3 rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

// Helper function to get color based on category
function getCategoryColor(category) {
  const colorMap = {
    security: 'red',
    ai: 'yellow',
    web: 'blue',
    algorithms: 'purple',
    dsa: 'green'
  };
  return colorMap[category] || 'gray';
}