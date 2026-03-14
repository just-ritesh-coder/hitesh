import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const { scrollYProgress } = useScroll();
  // Subtle 3D tilt mapped to scroll
  const rotateX = useTransform(scrollYProgress, [0, 0.3], [10, 0]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-16 md:py-24 px-4 sm:px-6 z-10 bg-[#080808] overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* Left: Portrait Placeholder */}
        <motion.div
          style={{ rotateX, perspective: 1000 }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full aspect-[4/5] max-w-[280px] sm:max-w-md mx-auto"
        >
          <div className="absolute inset-0 bg-[#111111] border border-[#333] transform translate-x-4 translate-y-4"></div>
          <div className="absolute inset-0 bg-[#080808] border border-[#C9A84C] flex items-center justify-center z-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* The actual image */}
            <img src="/profile.png" alt="Hitesh Jha" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 hover:grayscale-0 hover:opacity-100 hover:scale-105" />
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#C9A84C]"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#C9A84C]"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#C9A84C]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#C9A84C]"></div>
          </div>
        </motion.div>

        {/* Right: Bio */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col justify-center mt-8 lg:mt-0 text-center lg:text-left"
        >
          <h2 className="text-xs uppercase tracking-[0.3em] text-[#C9A84C] mb-6 md:mb-8 font-semibold">About</h2>
          
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed md:leading-tight text-[#FFFFFF]">
            A visionary behind the edit — that's me, <span className="text-[#C9A84C] font-normal">Hitesh Jha</span>. I don't just cut clips, I craft experiences. Blending technical precision with creative instinct, I bring stories to life through powerful visuals, seamless transitions, and cinematic rhythm. Whether it's a 30-second reel or a full narrative short, I deliver content that captivates from the very first frame.
          </p>

          <div className="mt-10 md:mt-16 flex items-center justify-center lg:justify-start space-x-6">
            <div className="h-[1px] w-12 md:w-16 bg-[#C9A84C]"></div>
            <p className="text-[#999999] text-[10px] md:text-xs tracking-[0.2em] uppercase">Mumbai, India</p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;
