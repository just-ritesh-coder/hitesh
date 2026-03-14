import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { ChevronDown } from 'lucide-react';

const FogParticles = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(3000), { radius: 2 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 30;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#666666" /* Brighter grey particles for visibility */
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 250]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToWork = () => {
    const workSection = document.getElementById('work-section');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
      {/* 3D Background - Monochromatic */}
      <div className="absolute inset-0 z-0 opacity-90">
        <Canvas camera={{ position: [0, 0, 1.5] }}>
          <FogParticles />
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/50 to-[#080808]"></div>
      </div>

      {/* Content */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <h1 className="text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[9rem] font-bold uppercase tracking-[0.05em] text-[#FFFFFF] mb-2 leading-none" style={{ fontFamily: '"Monument Extended", "Bebas Neue", sans-serif' }}>
          HITESH JHA
        </h1>
        
        {/* Shimmer/Gold underline */}
        <div className="relative w-full max-w-sm md:max-w-xl h-[2px] bg-[#333] mb-8 overflow-hidden rounded-full">
          <motion.div 
            className="absolute top-0 left-0 w-1/3 h-full bg-[#C9A84C] shadow-[0_0_10px_#C9A84C]"
            animate={{ x: ['-100%', '300%'] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
          />
        </div>

        <motion.p 
          className="text-sm sm:text-lg md:text-2xl text-[#F5E6C8] tracking-[0.15em] sm:tracking-[0.2em] font-light uppercase px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Video Editor &middot; Storyteller &middot; Visual Artist
        </motion.p>
        
        <motion.button
          onClick={scrollToWork}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-14 px-8 py-4 bg-[#080808] text-[#C9A84C] border border-[#C9A84C] text-sm uppercase tracking-widest font-semibold hover:bg-[#C9A84C] hover:text-[#080808] hover:shadow-[0_0_20px_rgba(201,168,76,0.5)] transition-all duration-500 rounded-sm"
        >
          Watch My Work
        </motion.button>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 z-10 flex flex-col items-center justify-center text-[#C9A84C] opacity-70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
};

export default Hero;
