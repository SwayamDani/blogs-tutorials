'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiCode, FiBook, FiAward, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-32 pb-16 px-4 container mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Learn <span className="text-green-500">Code</span> & <span className="text-green-500">Concepts</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Tutorials, guides, and insights on Data Structures, Algorithms, Web Development, and AI
            </motion.p>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="/tutorials" 
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center transition-colors duration-300"
              >
                Browse Tutorials <FiArrowRight className="ml-2" />
              </Link>
              <Link 
                href="/blog" 
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-full flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                Read Blog <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md h-96">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400 to-blue-500 rounded-lg transform rotate-3 opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-sm font-mono text-gray-600 dark:text-gray-400">data_structures.cpp</div>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="text-gray-800 dark:text-gray-300">
                    <p className="mb-2 text-blue-600 dark:text-blue-400">template &lt;typename T&gt;</p>
                    <p className="mb-2 text-green-600 dark:text-green-400">class LinkedList &#123;</p>
                    <p className="mb-2 pl-4">private:</p>
                    <p className="mb-2 pl-8 text-purple-600 dark:text-purple-400">struct Node &#123;</p>
                    <p className="mb-2 pl-12">T data;</p>
                    <p className="mb-2 pl-12">Node* next;</p>
                    <p className="mb-2 pl-12 text-gray-500">// Constructor</p>
                    <p className="mb-2 pl-12">Node(T value) : data(value), next(nullptr) &#123;&#125;</p>
                    <p className="mb-2 pl-8">&#125;;</p>
                    <p className="mb-2 pl-8">Node* head;</p>
                    <p className="mb-2 pl-4">public:</p>
                    <p className="mb-2 pl-8 text-gray-500">// Methods...</p>
                    <p className="mb-2">&#125;;</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Content Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Content</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Tutorial Card */}
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
                    DSA
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-xs">
                    C++
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">Data Structures & Algorithms in C++</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A comprehensive guide to mastering data structures and algorithms using C++.
                </p>
                <Link 
                  href="/tutorials/dsa-cpp-course-overview" 
                  className="inline-flex items-center text-green-500 font-medium"
                >
                  Start Learning <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
            
            {/* Featured Blog Post Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-blue-100 dark:bg-blue-900 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiBook className="text-6xl text-blue-500" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-xs">
                    AI
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">Integrating AI Into Modern Web Applications</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Learn how to leverage AI capabilities in your next web project without complex infrastructure.
                </p>
                <Link 
                  href="/blog/integrating-ai-into-web-applications" 
                  className="inline-flex items-center text-green-500 font-medium"
                >
                  Read Article <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
            
            {/* Start Learning Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500 to-blue-600 rounded-xl overflow-hidden shadow-lg text-white"
            >
              <div className="p-8 flex flex-col h-full justify-between">
                <div>
                  <FiAward className="text-4xl mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Ready to level up your skills?</h3>
                  <p className="mb-6 text-white/90">
                    Explore all tutorials and blog posts to enhance your knowledge in programming, algorithms, and modern development techniques.
                  </p>
                </div>
                <div className="flex flex-col space-y-3">
                  <Link 
                    href="/tutorials" 
                    className="bg-white text-green-600 px-6 py-3 rounded-full flex items-center justify-center transition-transform hover:scale-105"
                  >
                    Browse All Tutorials <FiArrowRight className="ml-2" />
                  </Link>
                  <Link 
                    href="/blog" 
                    className="bg-transparent border border-white px-6 py-3 rounded-full flex items-center justify-center transition-transform hover:scale-105"
                  >
                    View All Blog Posts <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Latest Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
            <Link 
              href="/blog" 
              className="text-green-500 flex items-center hover:text-green-600"
            >
              View All <FiArrowRight className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-red-100 dark:bg-red-900 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-red-500 font-bold">Security</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Cybersecurity Best Practices for 2025</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  A comprehensive guide to protecting your digital assets with modern security techniques.
                </p>
                <Link 
                  href="/blog/cybersecurity-best-practices-2025" 
                  className="inline-flex items-center text-green-500 font-medium"
                >
                  Read More <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
            
            {/* Blog Post 2 */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-blue-100 dark:bg-blue-900 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-blue-500 font-bold">Web</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Exploring Next.js 15: Key Features for Developers</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  A deep dive into the most impactful features in the latest Next.js release.
                </p>
                <Link 
                  href="/blog/nextjs-15-features" 
                  className="inline-flex items-center text-green-500 font-medium"
                >
                  Read More <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
            
            {/* Blog Post 3 */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-purple-100 dark:bg-purple-900 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-purple-500 font-bold">Algorithms</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Optimizing Algorithm Efficiency with Advanced Data Structures</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  Practical techniques to improve performance in your applications using the right data structures.
                </p>
                <Link 
                  href="/blog/data-structures-algorithm-efficiency" 
                  className="inline-flex items-center text-green-500 font-medium"
                >
                  Read More <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About This Site</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Welcome to my digital learning hub. I'm Swayam Dani, a Computer Science student at UC Riverside passionate about sharing knowledge on programming, data structures, algorithms, and modern development techniques.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://github.com/SwayamDani" 
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition-colors duration-300"
              >
                <FiGithub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/swayam-dani-554091299" 
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-300"
              >
                <FiLinkedin size={24} />
              </a>
              <a 
                href="https://swayamdani.com" 
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors duration-300"
              >
                <span className="px-2">Personal Site</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}