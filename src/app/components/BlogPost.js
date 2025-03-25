'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FiCalendar, 
  FiClock, 
  FiArrowLeft, 
  FiLinkedin, 
  FiTwitter, 
  FiShare2,
  FiThumbsUp,
  FiMessageSquare
} from 'react-icons/fi';

export default function BlogPost({ post }) {
  const [showShareOptions, setShowShareOptions] = useState(false);

  // Handle case when post data is not available
  if (!post) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
        <p className="mb-8">The post you're looking for doesn't exist or has been moved.</p>
        <Link 
          href="/blog" 
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-flex items-center"
        >
          <FiArrowLeft className="mr-2" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto pt-32 pb-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Back to blog button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-green-500 hover:text-green-600 mb-8 font-medium"
          >
            <FiArrowLeft className="mr-2" /> Back to Blog
          </Link>
          
          {/* Category label */}
          <div className="mb-4">
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </span>
          </div>
          
          {/* Post header */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center">
              <FiCalendar className="mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <FiClock className="mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          {/* Featured image */}
          <div className="relative w-full h-96 rounded-xl overflow-hidden mb-12">
            {post.imagePath ? (
              <Image
                src={post.imagePath}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white text-4xl font-bold">
                {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </div>
            )}
          </div>
          
          {/* Share buttons */}
          <div className="flex items-center mb-12">
            <span className="mr-4 text-gray-700 dark:text-gray-300 font-medium">Share this article:</span>
            <div className="flex space-x-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300">
                <FiLinkedin />
              </button>
              <button className="bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-full transition-colors duration-300">
                <FiTwitter />
              </button>
              <button 
                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 p-2 rounded-full transition-colors duration-300"
                onClick={() => setShowShareOptions(!showShareOptions)}
              >
                <FiShare2 />
              </button>
            </div>
            
            {/* More share options dropdown */}
            {showShareOptions && (
              <div className="relative ml-2">
                <div className="absolute left-0 top-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10 border border-gray-100 dark:border-gray-700">
                  <div className="py-1">
                    <button className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left">
                      Copy link
                    </button>
                    <button className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left">
                      Email
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Post content */}
          <div className="prose dark:prose-invert lg:prose-lg max-w-none mb-12">
            {post.content}
          </div>
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-12">
              <h3 className="text-lg font-bold mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Link 
                    key={index} 
                    href={`/blog/tag/${tag}`}
                    className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Feedback section */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-12">
            <h3 className="text-xl font-bold mb-4">Was this article helpful?</h3>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 px-4 py-2 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                <FiThumbsUp /> Yes, it was helpful
              </button>
              <button className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <FiMessageSquare /> Give feedback
              </button>
            </div>
          </div>
          
          {/* Related posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {post.relatedPosts.map((related, idx) => (
                  <Link
                    key={idx}
                    href={`/blog/${related.slug}`}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 dark:border-gray-700"
                  >
                    <h4 className="font-bold text-lg mb-2">{related.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Author info */}
          <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 text-xl font-bold flex-shrink-0">
                SD
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">About the Author</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Swayam Dani is a Computer Science student at UC Riverside with a passion for programming, AI, and cybersecurity. 
                  He shares insights and practical tutorials to help others on their tech journey.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/swayam-dani-554091299" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <FiLinkedin className="text-xl" />
                  </a>
                  <a 
                    href="https://github.com/SwayamDani" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter signup */}
          <div className="mt-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-8 text-white shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Enjoyed this article?</h3>
              <p>Subscribe to get notified when new content is published.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg flex-grow text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-green-600 hover:bg-gray-100 transition-colors font-medium px-6 py-3 rounded-lg"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-center mt-4 text-white/80">
              No spam ever. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}