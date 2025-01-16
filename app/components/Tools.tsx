'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { 
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiReact,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiLaravel,
  SiJest,
  SiFigma,
  SiAdobephotoshop,
  SiPostman,
  SiNextdotjs,
  SiGit
} from 'react-icons/si'

const tools = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'PHP', icon: SiPhp },
  { name: 'React', icon: SiReact },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'Redux', icon: SiRedux },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'NestJS', icon: SiNestjs },
  { name: 'React Native', icon: SiReact },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Docker', icon: SiDocker },
  { name: 'Laravel', icon: SiLaravel },
  { name: 'Jest', icon: SiJest },
  { name: 'Figma', icon: SiFigma },
  { name: 'Photoshop', icon: SiAdobephotoshop },
  { name: 'Postman', icon: SiPostman },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Git', icon: SiGit },
]

export default function Tools() {
  return (
    <section id="tools" className="min-h-screen p-5 pt-16 flex flex-col justify-center">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center text-purple-400"
      >
        Intergalactic Toolkit
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Card className="bg-[#1a0b2e] bg-opacity-50 text-white border border-purple-500/30 hover:border-purple-400/50 transition-colors backdrop-blur-sm">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <tool.icon className="w-8 h-8 mb-2 text-purple-400" />
                </motion.div>
                <h3 className="text-sm font-semibold text-purple-200 text-center">{tool.name}</h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

