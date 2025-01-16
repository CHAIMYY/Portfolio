'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const projects = [
  { id: 1, title: 'Nebula Navigator', description: 'A star-mapping application for amateur astronomers' },
  { id: 2, title: 'Cosmic Chat', description: 'Real-time messaging app with space-themed encryption' },
  { id: 3, title: 'Martian Weather', description: 'Live weather updates from the surface of Mars' },
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen p-5 pt-16">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center text-green-300"
      >
        Cosmic Creations
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gray-900 bg-opacity-80 text-white border border-green-500 overflow-hidden group">
              <CardHeader>
                <CardTitle className="text-green-300 group-hover:text-green-100 transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">{project.description}</CardDescription>
              </CardHeader>
              <motion.div 
                className="absolute inset-0 bg-[url('/images/galaxy-bg.jpg')] bg-cover opacity-20 group-hover:opacity-40 transition-opacity"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              />
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

