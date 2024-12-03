import { useState, useEffect } from 'react';

export const useActiveSection = (sections: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // Get the viewport height
      const viewportHeight = window.innerHeight;

      // Get all section elements and their positions
    //   [
    //     { name: 'Header', top: 0, bottom: 100, height: 100 },
    //     { name: 'Content', top: 100, bottom: 500, height: 400 },
    //     { name: 'Footer', top: 500, bottom: 600, height: 100 }
    //   ]
      const sectionPositions = sections.map(section => {
        const element = document.getElementById(section.toLowerCase());
        if (!element) return null;

        const rect = element.getBoundingClientRect();
        return {
          name: section,
          top: rect.top,
          bottom: rect.bottom,
          height: rect.height
        };
      }).filter(Boolean);

      // Find the most visible section
      let maxVisibleSection = null;
      let maxVisibleHeight = 0;

      for (const section of sectionPositions) {
        if (!section) continue;

        // Calculate how much of the section is visible
        const visibleTop = Math.max(0, section.top);
        const visibleBottom = Math.min(viewportHeight, section.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const adjustedHeight = visibleHeight * (1 - section.top / viewportHeight);

        if (adjustedHeight > maxVisibleHeight) {
          maxVisibleHeight = adjustedHeight;
          maxVisibleSection = section.name;
        }
      }

      if (maxVisibleSection && maxVisibleSection !== activeSection) {
        setActiveSection(maxVisibleSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, activeSection]);

  return activeSection;
};