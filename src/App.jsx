import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';
import BackgroundAudio from './components/BackgroundAudio';

function App() {
  return (
    <div className="relative w-full h-full bg-[#080808] text-[#999999] font-['Inter',sans-serif]">
      {/* Film grain overlay */}
      <div className="film-grain"></div>

      {/* Global Background Audio */}
      <BackgroundAudio />

      {/* Main Content Sections */}
      <main className="relative z-10 w-full h-full">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
