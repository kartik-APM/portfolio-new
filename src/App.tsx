import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { KARTIK } from './personalDetails/data';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} {KARTIK}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;