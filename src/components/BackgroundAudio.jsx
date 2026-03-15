import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const BackgroundAudio = () => {
  const [muted, setMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio object once
    if (!audioRef.current) {
      audioRef.current = new Audio('/assets/audio/batman_theme.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }

    const playAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setMuted(false);
          })
          .catch(err => console.log("Audio autoplay prevented by browser."));
      }
    };

    // Listen for the first user interaction to start playing
    document.addEventListener('click', playAudio, { once: true });
    document.addEventListener('scroll', playAudio, { once: true });

    return () => {
      document.removeEventListener('click', playAudio);
      document.removeEventListener('scroll', playAudio);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []); // Empty dependency array ensures this only ever runs ONCE on mount

  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !muted;
      audioRef.current.muted = newMutedState;
      setMuted(newMutedState);
      
      // If they click the button before interacting with the document, 
      // start playing the audio at the same time
      if (!isPlaying && !newMutedState) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.error(e));
      }
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      onClick={toggleMute}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg border transition-all duration-300 flex items-center justify-center 
        ${muted 
          ? 'bg-[#111111] border-[#333] text-[#999999] hover:border-[#666]' 
          : 'bg-[#C9A84C] border-[#C9A84C] text-[#080808] hover:bg-[#b0923f] shadow-[0_0_15px_rgba(201,168,76,0.5)]'
        }`}
      aria-label={muted ? "Unmute background music" : "Mute background music"}
    >
      {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      
      {/* Optional: Add a subtle pulse animation when playing and unmuted */}
      {(isPlaying && !muted) && (
        <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-[#C9A84C]" />
      )}
    </motion.button>
  );
};

export default BackgroundAudio;
