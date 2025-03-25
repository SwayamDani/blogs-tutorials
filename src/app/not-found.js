'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiHome, FiSearch, FiArrowLeft, FiCode, FiBookOpen } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-xl"
      >
        <div className="mb-8">
          <span className="text-9xl font-bold text-gray-200 dark:text-gray-800">404</span>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">Page Not Found</span>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Oops! It seems you've ventured into uncharted territory</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 mb-8">
          <h2 className="text-lg font-bold mb-4 flex items-center">
            <FiSearch className="mr-2 text-green-500" /> Looking for something specific?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Try one of these popular destinations:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/"
              className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 p-4 rounded-lg transition-colors"
            >
              <FiHome className="mr-2" /> Home
            </Link>
            <Link
              href="/tutorials"
              className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 p-4 rounded-lg transition-colors"
            >
              <FiCode className="mr-2" /> Tutorials
            </Link>
            <Link
              href="/blog"
              className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 p-4 rounded-lg transition-colors"
            >
              <FiBookOpen className="mr-2" /> Blog
            </Link>
          </div>
        </div>
        
        <Link 
          href="/" 
          className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-md transition-colors"
        >
          <FiArrowLeft className="mr-2" /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
}