import React from 'react';
import { Code2, Database, Layout, Server } from 'lucide-react';

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
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={skill}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;