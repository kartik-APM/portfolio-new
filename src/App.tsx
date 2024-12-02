import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;