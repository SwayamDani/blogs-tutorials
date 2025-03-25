'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiCode, FiBook, FiAward, FiGithub, FiLinkedin, FiUser, FiMessageSquare } from 'react-icons/fi'
import { getAllTutorials } from './utils/tutorialData'
import { getFeaturedPosts, getLatestPosts } from './utils/blogData'

export default function Home() {
  // Get tutorials data
  const tutorials = getAllTutorials();
  const featuredTutorial = tutorials[0];

  // Get blog posts data
  const featuredPost = getFeaturedPosts(1)[0];
  const latestPosts = getLatestPosts(3);

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-32 pb-16 px-4 container mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
          {/* Background decorations */}
          <div className="absolute -z-10 top-20 left-0 w-72 h-72 bg-green-100 dark:bg-green-900/20 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -z-10 bottom-0 right-20 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60"></div>
          
          <div className="md:w-1/2">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 rounded-full text-sm font-medium inline-block mb-4">Welcome to ByteHub</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Learn <span className="text-green-500">Code</span> & <span className="text-green-500">Concepts</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Practical tutorials and insights to help you master Data Structures, Algorithms, Web Development, and AI. Join me on this learning journey!
            </motion.p>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="/tutorials" 
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Start Learning <FiArrowRight className="ml-2" />
              </Link>
              <Link 
                href="/blog" 
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-full flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 shadow-md hover:shadow-lg"
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
              <div className="relative bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
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

      {/* What You'll Learn */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What You'll Learn</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore a growing collection of resources designed to help you build practical skills in:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4"><FiCode size={24} /></div>,
                title: "Data Structures",
                description: "Master the building blocks of efficient software with linked lists, trees, and more."
              },
              { 
                icon: <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4"><FiAward size={24} /></div>,
                title: "Algorithms",
                description: "Learn problem-solving approaches through step-by-step algorithm implementations."
              },
              { 
                icon: <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4"><FiUser size={24} /></div>,
                title: "Web Development",
                description: "Build modern web applications with React, Next.js, and other cutting-edge tools."
              },
              { 
                icon: <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-4"><FiMessageSquare size={24} /></div>,
                title: "AI & Machine Learning",
                description: "Explore the fundamentals of AI and how to integrate it into your applications."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                {item.icon}
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Resources</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Jump into these hand-picked tutorials and articles to start your learning journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Tutorial Card */}
            {featuredTutorial && (
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
              >
                <div className="h-48 bg-green-50 dark:bg-green-900/30 relative flex items-center justify-center">
                  <FiCode className="text-6xl text-green-500" />
                  <div className="absolute top-4 left-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs font-medium">
                    TUTORIAL
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
                    className="inline-flex items-center text-green-500 font-medium hover:text-green-600 transition-colors"
                  >
                    Start Learning <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            )}
            
            {/* Featured Blog Post Card */}
            {featuredPost && (
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
              >
                <div className="h-48 bg-blue-50 dark:bg-blue-900/30 relative flex items-center justify-center">
                  <FiBook className="text-6xl text-blue-500" />
                  <div className="absolute top-4 left-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                    BLOG
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-xs">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{featuredPost.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center text-blue-500 font-medium hover:text-blue-600 transition-colors"
                  >
                    Read Article <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            )}
            
            {/* Join Community Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500 to-blue-600 rounded-xl overflow-hidden shadow-lg text-white border border-green-400"
            >
              <div className="p-8 flex flex-col h-full justify-between">
                <div>
                  <FiAward className="text-4xl mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Ready to level up your skills?</h3>
                  <p className="mb-6 text-white/90">
                    Join a community of learners and share your journey. Get help, provide feedback, and grow together!
                  </p>
                </div>
                <div className="flex flex-col space-y-3">
                  <Link 
                    href="/tutorials" 
                    className="bg-white text-green-600 px-6 py-3 rounded-full flex items-center justify-center transition-transform hover:scale-105 font-medium"
                  >
                    Browse All Tutorials <FiArrowRight className="ml-2" />
                  </Link>
                  <Link 
                    href="/blog" 
                    className="bg-transparent border border-white px-6 py-3 rounded-full flex items-center justify-center transition-transform hover:scale-105 font-medium"
                  >
                    View All Blog Posts <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Others Are Saying</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Feedback from students and readers who have used these resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "CS Student",
                comment: "The tutorials are so well-structured! I finally understand how linked lists work after struggling for weeks with other resources."
              },
              {
                name: "Priya Sharma",
                role: "Software Developer",
                comment: "The code examples are crystal clear and the step-by-step approach makes even complex topics accessible. Highly recommend!"
              },
              {
                name: "Marco Rodriguez",
                role: "Web Developer",
                comment: "ByteHub's blog articles have helped me stay current with the latest tech trends. The Next.js guide saved me hours of research."
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
              >
                <div className="mb-4 text-yellow-500">
                  {"★".repeat(5)}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              className="text-green-500 flex items-center hover:text-green-600 transition-colors"
            >
              View All <FiArrowRight className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <motion.div 
                key={post.slug}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-600"
              >
                <div className="h-48 bg-gray-100 dark:bg-gray-600 relative flex items-center justify-center">
                  <div className="text-gray-500 dark:text-gray-400 font-bold text-xl">
                    {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs">
                      {post.date}
                    </span>
                    <span className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-green-500 font-medium hover:text-green-600 transition-colors"
                  >
                    Read More <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-600">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-3">Stay Updated</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Subscribe to get notified when new tutorials and blog posts are published.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button 
                type="submit" 
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
              No spam ever. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About This Site</h2>
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-green-500">
              <div className="w-full h-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400 text-2xl font-bold">
                SD
              </div>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Welcome! I'm Swayam Dani, a Computer Science student at UC Riverside passionate about sharing knowledge on programming, data structures, algorithms, and modern development techniques. ByteHub is my way of helping others on their tech journey.
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
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full transition-colors duration-300 font-medium"
              >
                Personal Site
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}