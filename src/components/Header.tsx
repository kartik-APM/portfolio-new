import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import Logo from './Logo';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { useActiveSection } from '../hooks/useActiveSection';
import { fadeInDown, staggerContainer } from '../animations/variants';
import { springTransition, smoothTransition } from '../animations/transitions';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];
  const activeSection = useActiveSection(menuItems);
  const scrollToTop = useScrollToTop();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={smoothTransition}
      className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
        <Logo onClick={scrollToTop} />
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="hidden md:flex space-x-8"
          >
            {menuItems.map((item) => (
              <motion.a
                key={item}
                variants={fadeInDown}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors relative ${
                  activeSection === item
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={springTransition}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item}
                {activeSection === item && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                    initial={false}
                    transition={springTransition}
                  />
                )}
              </motion.a>
            ))}
          </motion.div>

          <motion.button
            className="md:hidden"
            initial="hidden"
            animate="visible"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={smoothTransition}
            className="md:hidden"
          >
            <div className="flex flex-col space-y-4 pt-4 pb-3">
              {menuItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors ${
                    activeSection === item
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={springTransition}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false)
                    document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;