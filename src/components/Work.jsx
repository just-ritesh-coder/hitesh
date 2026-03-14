import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const shorts = [
  { id: 'TI-U-nCKkjw', title: 'Cinematic Edit', category: 'Showreel' },
  { id: 'rF91_TT_XsM', title: 'Motion Graphics', category: 'Visuals' },
  { id: 'GjO1ZXE9K6c', title: 'Shorts Format', category: 'Social Media' },
  { id: 'ivxxqKxdpVI', title: 'Color Grading', category: 'Post Production' },
  { id: 'Z69Xtm5CnIA', title: 'Storytelling', category: 'Narrative' },
  { id: 'qFyDUA-IBBE', title: 'Dynamic Cuts', category: 'Editing' },
];

const Work = () => {
  const [selectedVideoId, setSelectedVideoId] = useState(shorts[0].id);
  const selectedVideo = shorts.find(v => v.id === selectedVideoId) || shorts[0];

  return (
    <section id="work-section" className="relative w-full min-h-screen py-16 md:py-24 px-4 sm:px-6 z-10 bg-[#080808]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <header className="text-center mb-12 md:mb-20">
          <h2 className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C9A84C] mb-4 font-semibold">Case Studies</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-widest text-[#FFFFFF] mb-2" style={{ fontFamily: '"Monument Extended", "Bebas Neue", sans-serif' }}>
            MY WORK
          </h3>
          <div className="w-24 h-[2px] bg-[#C9A84C] mx-auto mt-6 shadow-[0_0_15px_rgba(201,168,76,0.8)]"></div>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16"
        >
          {/* Left Side: Main Player */}
          <div className="lg:w-2/3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative w-full aspect-[9/16] sm:aspect-video rounded-xl overflow-hidden bg-[#111111] border border-[#333] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              <img
                src={`https://img.youtube.com/vi/${selectedVideo.id}/maxresdefault.jpg`}
                alt={selectedVideo.title}
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = `https://img.youtube.com/vi/${selectedVideo.id}/hqdefault.jpg`;
                }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <a 
                href={`https://www.youtube.com/shorts/${selectedVideo.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors"
                aria-label={`Watch ${selectedVideo.title}`}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#C9A84C] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_20px_rgba(201,168,76,0.5)]">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#080808] ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </a>
            </div>

            <div className="mt-8 px-2 max-w-2xl mx-auto lg:mx-0 w-full">
              <span className="text-[#C9A84C] uppercase tracking-[0.2em] text-[10px] sm:text-xs font-semibold">{selectedVideo.category}</span>
              <h4 className="text-2xl sm:text-3xl text-[#FFFFFF] font-bold mt-2 uppercase tracking-wide" style={{ fontFamily: '"Monument Extended", sans-serif' }}>
                {selectedVideo.title}
              </h4>
              <p className="text-[#999999] text-sm mt-4 leading-relaxed font-light">
                A high-end cinematic short showcasing precise cuts, immersive color grading, and compelling narrative structures tailored for modern fast-paced audiences.
              </p>
            </div>
          </div>

          {/* Right Side: Playlist */}
          <div className="lg:w-1/3 flex flex-col gap-4 mt-12 lg:mt-0 max-h-[600px] lg:max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
            {shorts.map((video) => (
              <button
                key={video.id}
                onClick={() => setSelectedVideoId(video.id)}
                className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 text-left w-full group ${
                  selectedVideo.id === video.id 
                    ? 'bg-[#111111] border border-[#C9A84C] shadow-[0_0_15px_rgba(201,168,76,0.2)]' 
                    : 'bg-transparent border border-transparent hover:bg-[#111111] hover:border-[#333]'
                }`}
              >
                <div className="relative w-24 h-36 shrink-0 rounded-md overflow-hidden bg-[#080808] border border-[#222]">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                    alt={video.title} 
                    className={`w-full h-full object-cover transition-opacity duration-300 ${selectedVideo.id === video.id ? 'opacity-50' : 'opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0'}`}
                  />
                  {selectedVideo.id === video.id ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                      <span className="text-[#C9A84C] text-[10px] font-bold uppercase tracking-widest text-glow-gold">Playing</span>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-6 h-6 text-[#FFFFFF]" fill="currentColor" />
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className={`font-semibold text-sm sm:text-base uppercase tracking-wider transition-colors duration-300 ${selectedVideo.id === video.id ? 'text-[#C9A84C]' : 'text-[#FFFFFF] group-hover:text-[#F5E6C8]'}`}>
                    {video.title}
                  </h4>
                  <span className="text-[#999999] text-[10px] sm:text-xs mt-2 uppercase tracking-widest">{video.category}</span>
                </div>
              </button>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Work;
