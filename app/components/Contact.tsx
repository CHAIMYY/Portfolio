'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center p-5 pt-16"
    >
      <motion.h2
        whileHover={{ scale: 1.1 }}
        className="text-4xl font-bold mb-8 text-purple-400"
      >
        Transmit a Message
      </motion.h2>
      <motion.form
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-md space-y-4"
      >
        <Input 
          type="text" 
          placeholder="Your Earth Name" 
          className="bg-[#1a0b2e] border-purple-500/30 text-purple-200 placeholder-purple-300/50 focus:border-purple-400"
        />
        <Input 
          type="email" 
          placeholder="Your Cosmic Email" 
          className="bg-[#1a0b2e] border-purple-500/30 text-purple-200 placeholder-purple-300/50 focus:border-purple-400"
        />
        <Textarea 
          placeholder="Your Interstellar Message" 
          className="bg-[#1a0b2e] border-purple-500/30 text-purple-200 placeholder-purple-300/50 focus:border-purple-400"
        />
        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
          Launch Message
        </Button>
      </motion.form>
    </motion.section>
  )
}

