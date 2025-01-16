import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Tools from './components/Tools'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen text-white pt-16 overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Tools />
      <Contact />
    </main>
  )
}

