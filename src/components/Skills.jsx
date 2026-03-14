import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "Color Grading",
  "Motion Graphics",
  "Reels & Shorts",
  "Storytelling",
  "Sound Design"
];

const Skills = () => {
  return (
    <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center py-16 md:py-24 px-4 sm:px-6 z-10 bg-[#080808] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 md:mb-16 relative z-10"
      >
        <h2 className="text-[10px] sm:text-sm uppercase tracking-[0.3em] text-[#C9A84C] mb-4 font-semibold">Expertise</h2>
        <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest text-[#FFFFFF]" style={{ fontFamily: '"Monument Extended", "Bebas Neue", sans-serif' }}>
          TOOLS & SKILLS
        </h3>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl relative z-10">
        {skills.map((skill, index) => {
          // Zero-gravity drift calculation
          const duration = 4 + Math.random() * 3;
          const delay = Math.random() * 2;
          
          return (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: delay,
                }}
                className="px-5 py-3 sm:px-8 sm:py-4 bg-[#111111] border border-[#C9A84C] text-[#FFFFFF] text-[10px] sm:text-sm uppercase tracking-widest hover:bg-[#C9A84C] hover:text-[#080808] hover:shadow-[0_0_20px_rgba(201,168,76,0.6)] transition-all duration-500 cursor-default"
              >
                {skill}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
