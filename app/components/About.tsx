'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const TypingText = ({ text }: { text: string }) => {
  const letters = Array.from(text)
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="min-h-screen flex flex-col justify-center items-center text-center p-5 pt-16"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative w-64 h-64 mb-8 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-lg shadow-purple-500/30"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.jpg-20HUzBx05CW2SPBuYHvXi1AIJvhx3Q.jpeg"
          alt="Professional Portrait"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </motion.div>
      <motion.h2
        whileHover={{ scale: 1.1 }}
        className="text-4xl font-bold mb-4 text-purple-400"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-2xl text-lg text-purple-200"
      >
        <TypingText text="Greetings, Earthlings! I'm a passionate full-stack developer with expertise in modern web technologies. My mission is to create exceptional digital experiences that push the boundaries of what's possible on the web." />
      </motion.div>
    </motion.section>
  )
}

