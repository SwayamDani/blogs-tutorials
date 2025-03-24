'use client'

import React, { useState, useEffect } from 'react'
import './globals.css'
import Navbar from './components/Navbar'

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
        <title>Swayam Dani | Portfolio</title>
        <meta name="description" content="Portfolio of Swayam Dani - Computer Science student specializing in AI, web development, and cybersecurity" />
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
        <Navbar darkMode={darkMode} />
        <main>{children}</main>
      </body>
    </html>
  )
}