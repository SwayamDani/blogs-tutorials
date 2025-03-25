'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMessageSquare, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="container mx-auto py-32 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions, feedback, or suggestions? I'd love to hear from you! Fill out the form below or reach out through any of the provided channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                <FiMail size={24} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Email</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              <a href="mailto:contact@swayamdani.com" className="hover:text-green-500 transition-colors">
                contact@swayamdani.com
              </a>
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <FiLinkedin size={24} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">LinkedIn</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              <a 
                href="https://www.linkedin.com/in/swayam-dani-554091299" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 mb-4">
                <FiGithub size={24} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">GitHub</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              <a 
                href="https://github.com/SwayamDani" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                View my GitHub
              </a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-3 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FiMessageSquare className="mr-2 text-green-500" /> Send a Message
            </h2>
            
            {submitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">Message Sent!</h3>
                <p className="text-green-600 dark:text-green-400">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors ${
                    loading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-2" /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
          <div className="md:col-span-2 bg-gradient-to-br from-green-500 to-blue-600 p-8 rounded-xl shadow-md text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
              <p className="mb-8">
                I'm always interested in new ideas and feedback. Whether you have a question about a tutorial, a suggestion for a new topic, or just want to say hello, I'd love to hear from you!
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Response Time</h3>
                <p>I typically respond within 24-48 hours during weekdays.</p>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Request a Tutorial</h3>
              <p className="mb-2">
                Have a specific topic you'd like to see covered? Let me know in your message, and I'll consider it for future tutorials.
              </p>
              <p className="text-sm text-white/80">
                Popular requests are prioritized based on community interest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}