import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server } from 'lucide-react';
import { springTransition } from '../animations/transitions';
import { fadeInUp, staggerContainer } from '../animations/variants';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="w-8 h-8 text-blue-600" />,
      skills: ['React JS/Native', 'Javascript', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-8 h-8 text-green-600" />,
      skills: ['Node.js', 'Python', 'Django'],
    },
    {
      title: 'Database',
      icon: <Database className="w-8 h-8 text-purple-600" />,
      skills: ['MySQL', 'DynamoDB', 'MongoDB'],
    },
    {
      title: 'Other Skills / Languages',
      icon: <Code2 className="w-8 h-8 text-orange-600" />,
      skills: ['Git', 'C/C++', 'Java', 'Android'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
      <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
          <motion.div
              key={category.title}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: springTransition
              }}
              className="glass-effect p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <motion.div 
                className="flex items-center space-x-4 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </motion.div>
              <motion.div 
                className="space-y-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    variants={fadeInUp}
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;