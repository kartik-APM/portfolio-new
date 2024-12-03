import React from "react";
import { motion } from "framer-motion";
import profilePhoto from "../assets/profile-photo.png";
import { springTransition } from "../animations/transitions";

interface LogoProps {
  onClick: () => void;
}

const Logo: React.FC<LogoProps> = ({ onClick }) => {
  return (
    <motion.div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={springTransition}
    >
      <img
        src={profilePhoto}
        rel="preload"
        alt="Profile"
        className="h-8 w-8 rounded-full shadow-lg"
      />
      <span className="text-2xl font-bold text-gray-800">Portfolio</span>
    </motion.div>
  );
};

export default Logo;
