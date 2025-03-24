'use client'
import React from 'react'
import {useState} from 'react'
import Blogs from '../components/Blog'
import { motion } from 'framer-motion'
import { getAllBlogPosts, getFeaturedPosts, getBlogPostsByCategory } from '../utils/blogData'
import Link from 'next/link'
import Image from 'next/image'
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi'

export default function BlogPage() {
  const [filter, setFilter] = useState('all');
  
  // Get all blog posts
  const allPosts = getAllBlogPosts();
  
  // Get featured posts
  const featuredPost = getFeaturedPosts(1)[0];
  
  // Filter posts based on category
  const filteredPosts = filter === 'all' 
    ? allPosts 
    : getBlogPostsByCategory(filter);

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
      <h2 className="text-4xl font-bold mb-4 text-center">Blog</h2>
      <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
        Sharing insights on technology, development, and industry trends.
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

      {/* Featured Post */}
      {featuredPost && (
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href={`/blog/${featuredPost.slug}`} className="block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 md:h-auto">
                <div className="w-full h-full relative rounded-t-xl md:rounded-l-xl md:rounded-tr-none overflow-hidden">
                  <Image
                    src={featuredPost.imagePath}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
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
                <div className="inline-flex items-center text-green-500 font-medium">
                  Read Article <FiArrowRight className="ml-2" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      )}

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
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            variants={item}
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative h-48 w-full">
                <Image
                  src={post.imagePath}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
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
                <div className="inline-flex items-center text-green-500 font-medium">
                  Read More <FiArrowRight className="ml-2" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}