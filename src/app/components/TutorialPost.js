'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  FiCalendar,
  FiClock,
  FiArrowLeft,
  FiArrowRight,
  FiLinkedin,
  FiTwitter,
  FiShare2,
  FiCheckCircle,
  FiInfo,
  FiList,
  FiFlag,
  FiTrendingUp
} from 'react-icons/fi';

export default function TutorialPost({ tutorial }) {
  if (!tutorial) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Tutorial not found</h2>
        <p className="mb-8">The tutorial you're looking for doesn't exist or has been moved.</p>
        <Link
          href="/tutorials"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-flex items-center"
        >
          <FiArrowLeft className="mr-2" /> Back to Tutorials
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto pt-32 pb-20 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/tutorials"
            className="inline-flex items-center text-green-500 hover:text-green-600 mb-8 font-medium"
          >
            <FiArrowLeft className="mr-2" /> Back to Tutorials
          </Link>

          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{tutorial.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center">
              <FiCalendar className="mr-1" />
              <span>{tutorial.date}</span>
            </div>
            <div className="flex items-center">
              <FiClock className="mr-1" />
              <span>{tutorial.readTime}</span>
            </div>
            {tutorial.difficulty && (
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                {tutorial.difficulty}
              </span>
            )}
            {tutorial.category && (
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                {tutorial.category.charAt(0).toUpperCase() + tutorial.category.slice(1)}
              </span>
            )}
          </div>

          {/* Featured Image */}
          {tutorial.imagePath && (
            <div className="w-full rounded-xl overflow-hidden mb-12">
              <img src={tutorial.imagePath} alt={tutorial.title} className="w-auto max-w-75 h-auto max-h-96" />
            </div>
          )}

          {/* Share Buttons */}
          <div className="flex space-x-4 mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-300">
              <FiLinkedin />
            </button>
            <button className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition-colors duration-300">
              <FiTwitter />
            </button>
            <button className="bg-gray-500 hover:bg-gray-600 text-white p-3 rounded-full transition-colors duration-300">
              <FiShare2 />
            </button>
          </div>

          {/* About Section */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow mb-12">
            <h2 className="text-2xl font-bold flex items-center mb-4">
              <FiInfo className="text-green-500 mr-2" />
              About this Course
            </h2>
            <p className="mb-4">{tutorial.introduction}</p>
            {tutorial.prerequisites && tutorial.prerequisites.length > 0 && (
              <>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <FiList className="text-green-500 mr-2" />
                  Prerequisites
                </h3>
                <ul className="list-none space-y-2">
                  {tutorial.prerequisites.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <FiCheckCircle className="text-green-500 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Steps Section (Detailed Tutorial Content) */}
          {tutorial.steps && tutorial.steps.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Steps</h2>
              {tutorial.steps.map((step, index) => (
                <div
                  key={index}
                  id={`step-${index + 1}`}
                  className="border-l-4 pl-6 py-4 mb-8 bg-gray-50 dark:bg-gray-800 rounded"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4 flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="mb-4">{step.content}</p>
                  {step.code && (
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
                      <code>{step.code}</code>
                    </pre>
                  )}
                  {step.tip && (
                    <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <p className="text-blue-800 dark:text-blue-300 font-medium">Tip</p>
                      <p className="text-blue-700 dark:text-blue-200">{step.tip}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Topics Section (For Chapter Overviews) */}
          {tutorial.topics && tutorial.topics.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Topics</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tutorial.topics.map((topic, index) => (
                  <div key={index} className="border p-4 rounded-lg bg-white dark:bg-gray-700 shadow">
                    <h4 className="font-bold text-lg mb-2">{topic.title}</h4>
                    <p className="mb-4 text-sm">{topic.description}</p>
                    {topic.moduleSlug && (
                      <Link
                        href={`/tutorials/${topic.moduleSlug}`}
                        className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded transition-colors duration-200 text-sm"
                      >
                        Go to Topic <FiArrowRight className="ml-1" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modules Section (For Main Course Overviews) */}
          {tutorial.modules && tutorial.modules.length > 0 && tutorial.steps === undefined && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Modules</h2>
              {tutorial.modules.map((module, index) => (
                <div
                  key={index}
                  id={`module-${index + 1}`}
                  className="border-l-4 pl-6 py-4 mb-8 bg-gray-50 dark:bg-gray-800 rounded"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4 flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold">{module.title}</h3>
                  </div>
                  <p className="mb-4">{module.content}</p>
                  {module.tip && (
                    <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 mb-4 rounded-r-lg">
                      <p className="text-blue-800 dark:text-blue-300 font-medium">Tip</p>
                      <p className="text-blue-700 dark:text-blue-200">{module.tip}</p>
                    </div>
                  )}
                  {module.moduleSlug && (
                    <Link
                      href={`/tutorials/${module.moduleSlug}`}
                      className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors duration-200"
                    >
                      Go to Module <FiArrowRight className="ml-2" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Conclusion */}
          {tutorial.conclusion && (
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow mb-12">
              <h2 className="text-2xl font-bold flex items-center mb-4">
                <FiFlag className="text-green-500 mr-2" />
                Conclusion
              </h2>
              <p>{tutorial.conclusion}</p>
            </div>
          )}

          {/* Next Steps */}
          {tutorial.nextSteps && tutorial.nextSteps.length > 0 && (
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow mb-12">
              <h2 className="text-2xl font-bold flex items-center mb-4">
                <FiTrendingUp className="text-green-500 mr-2" />
                Next Steps
              </h2>
              <ul className="list-none space-y-2">
                {tutorial.nextSteps.map((step, idx) => (
                  <li key={idx} className="flex items-center">
                    <FiCheckCircle className="text-green-500 mr-2" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related Tutorials */}
          {tutorial.relatedTutorials && tutorial.relatedTutorials.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Related Tutorials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tutorial.relatedTutorials.map((related, idx) => (
                  <Link
                    key={idx}
                    href={`/tutorials/${related.slug}`}
                    className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow hover:shadow-md transition-shadow duration-200"
                  >
                    <h4 className="font-bold text-lg mb-2">{related.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{related.excerpt}</p>
                    <div className="flex items-center text-green-500">
                      <span>View Tutorial</span>
                      <FiArrowRight className="ml-2" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Author Info */}
          <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-12 flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-24 h-24 relative rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/profile.jpg"
                alt="Swayam Dani"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Written by Swayam Dani</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Computer Science & Business Applications student at UC Riverside with a passion for AI, cybersecurity, and web development. Sharing knowledge to help others on their tech journey.
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
                  <i className="fab fa-github text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
