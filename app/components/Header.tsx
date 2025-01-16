'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 flex justify-between items-center p-5 bg-[#0a0118]/50 backdrop-blur-sm z-10"
    >
      <motion.h1
        whileHover={{ scale: 1.1 }}
        className="text-2xl font-bold text-purple-400"
      >
        Cosmic Portfolio
      </motion.h1>
      <nav>
        <Button variant="ghost" className="mr-2 text-purple-200 hover:text-purple-100 hover:bg-purple-900/20" onClick={() => scrollToSection('about')}>About</Button>
        <Button variant="ghost" className="mr-2 text-purple-200 hover:text-purple-100 hover:bg-purple-900/20" onClick={() => scrollToSection('projects')}>Projects</Button>
        <Button variant="ghost" className="mr-2 text-purple-200 hover:text-purple-100 hover:bg-purple-900/20" onClick={() => scrollToSection('tools')}>Tools</Button>
        <Button variant="ghost" className="text-purple-200 hover:text-purple-100 hover:bg-purple-900/20" onClick={() => scrollToSection('contact')}>Contact</Button>
      </nav>
    </motion.header>
  )
}

