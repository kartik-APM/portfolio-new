import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, User } from 'lucide-react';

const getYearDiffFromJuly2021 = () => {
  const startDate = new Date('2021-07-05'); // start date of my career 😇
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  return Math.round(diffYears);
};

const Hero = () => {
  return (
    <section id="about" className="py-20 bg-white min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Hello, I'm Kartik Kumar Panday!</h3>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate Front-end developer with {getYearDiffFromJuly2021()}+ years of experience in building
              web applications. I love turning complex problems into simple, beautiful,
              and intuitive solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="text-blue-600" />
                <span>Front-end Developer</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-600" />
                <span>kartik.panda663@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-600" />
                <span>Bangalore, India</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/kartik-APM"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/kartikpanday/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:kartik.panda663@gmail.com"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600&h=600"
              rel='preload'
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;