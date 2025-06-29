import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <>
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
