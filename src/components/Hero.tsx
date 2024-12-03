import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, User } from "lucide-react";
import { springTransition } from "../animations/transitions";
import { fadeInUp } from "../animations/variants";
import { KARTIK, KARTIK_ADDRESS, KARTIK_EMAIL } from "../personalDetails/data";

const getYearDiffFromJuly2021 = () => {
  const startDate = new Date('2021-07-05'); // start date of my career 😇
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  return Math.round(diffYears);
};

const Hero = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900">
              Hello, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {KARTIK}
              </span>
            </h1>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate Software Engineer with{" "}
              {getYearDiffFromJuly2021()}+ years of experience in building web
              applications. I love turning complex problems into simple,
              beautiful, and intuitive solutions.
            </p>
            <motion.div
              className="flex flex-col space-y-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-center space-x-3 text-gray-700"
                whileHover={{ x: 10 }}
                transition={springTransition}
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <span>Front-end Developer</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 text-gray-700"
                whileHover={{ x: 10 }}
                transition={springTransition}
              >
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-600" />
                </div>
                <span>{KARTIK_EMAIL}</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 text-gray-700"
                whileHover={{ x: 10 }}
                transition={springTransition}
              >
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-pink-600" />
                </div>
                <span>{KARTIK_ADDRESS}</span>
              </motion.div>
            </motion.div>

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
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;