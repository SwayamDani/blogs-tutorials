'use client'

import React, { useState, useEffect } from 'react'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(true)
  
  useEffect(() => {
    // Check for saved theme preference or use dark as default
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      if (savedTheme) {
        setDarkMode(savedTheme === 'dark')
      } else {
        setDarkMode(prefersDark)
      }
    }
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light')
  }

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <head>
        <title>ByteHub by Swayam Dani | Tutorials & Articles</title>
        <meta name="description" content="ByteHub by Swayam Dani - Tutorials and articles on programming, data structures, algorithms, web development, and more." />
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300 flex flex-col">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}