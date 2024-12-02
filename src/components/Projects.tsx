import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';
import travelList from '../assets/travel-list.png';
import splitwise from '../assets/splitwise-easy.png';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    description: string;
    longDescription: string;
    image: string;
    github: string;
    live: string;
    tags: string[];
    features: string[];
    startDate: string;
    endDate: string;
  } | null>(null);

  const projects = [
    {
      title: 'Travel List',
      description: 'A simple app to create and manage your travel packing list.',
      longDescription: 'Travel List is a user-friendly web application designed to streamline travel preparation. Users can easily add and remove items, mark them as packed, and sort the list for better organization. Perfect for keeping track of essentials while traveling!',
      image: travelList,
      github: 'https://github.com/kartik-APM/PracticeReact/tree/main/travel-list',
      live: 'https://travel-essential-list.netlify.app/',
      tags: ['React JS', 'Javascript'],
      features: [
        'Add and remove items',
        'Mark items as packed',
        'Sort list for better organization',
        'User-friendly interface',
        'Responsive design'
      ],
      startDate: 'Jan 2023',
      endDate: 'Present'
    },
    {
      title: 'Splitwise App',
      description: 'An app to split expenses and manage shared finances with friends.',
      longDescription: 'Splitwise App is a collaborative tool designed to help users manage shared expenses and finances. With real-time updates, task creation, and team chat features, it simplifies the process of tracking and settling expenses among friends and groups.',
      image: splitwise,
      github: 'https://github.com/kartik-APM/PracticeReact/tree/main/splitwise-easy',
      live: 'https://splitwise-easy.netlify.app/',
      tags: ['React JS', 'Javascript'],
      features: [
        'Real-time updates and collaboration',
        'Task creation and assignment',
        'Progress tracking and reporting',
        'Team chat and notifications',
        'File sharing and attachments'
      ],
      startDate: 'Jun 2022',
      endDate: 'Dec 2022'
    },
    // {
    //   title: 'Weather Dashboard',
    //   description: 'A weather dashboard that displays forecast data using external APIs.',
    //   longDescription: 'An intuitive weather dashboard that provides detailed weather information, forecasts, and historical data using multiple weather APIs. It offers features like interactive weather maps and location-based weather alerts to keep users informed about current and future weather conditions.',
    //   image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b',
    //   github: 'https://github.com',
    //   live: 'https://example.com',
    //   tags: ['React', 'TypeScript', 'API', 'Chart.js'],
    //   features: [
    //     'Current weather conditions',
    //     'Weekly forecast',
    //     'Historical weather data',
    //     'Interactive weather maps',
    //     'Location-based weather alerts'
    //   ],
    //   startDate: 'Mar 2022',
    //   endDate: 'May 2022'
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;