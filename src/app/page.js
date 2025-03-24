'use client'
import React from 'react'

import { motion } from 'framer-motion'
import Blog from './components/Blog'
import Tutorial from './components/Tutorials'

export default function Home() {
  return (
    <>
      <motion.section id="hero">
        <Blog />
      </motion.section>

      <motion.section id="tutorials">
        <Tutorial /> 
      </motion.section>

      
    </>
  )
}