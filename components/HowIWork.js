import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HowIWork() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="py-8 lg:py-12 md:py-20 px-6 relative w-full overflow-hidden" id="how-i-work">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center mb-6 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit mb-6"
          >
            <span className="text-primary text-[12px] font-bold uppercase tracking-wider">Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[24px] sm:text-3xl md:text-2xl md:text-4xl font-bold text-text-primary leading-tight mb-3 sm:mb-4"
          >
            How I <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] sm:text-base md:text-lg text-text-secondary leading-relaxed"
          >
            Take a behind-the-scenes look at my design process, from initial research and strategy to final pixel-perfect execution.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative max-w-5xl mx-auto rounded-[16px] md:rounded-[24px] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20 bg-white/5 backdrop-blur-md"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-80 pointer-events-none" />

          <div className="relative aspect-video w-full flex items-center justify-center bg-black/60">

            <video
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isPlaying ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              controls={isPlaying}
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              onEnded={() => setIsPlaying(false)}
              onPause={() => setIsPlaying(false)}
            >
              Your browser does not support HTML video.
            </video>

            {/* Thumbnail / Play Button Overlay */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gradient-to-r from-primary/70 to-secondary/70 backdrop-blur-[2px] cursor-pointer"
                  onClick={handlePlay}
                >
                  {/* Background image as Thumbnail */}
                  <img
                    src="images/How-I-Work.png"
                    alt="Video Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-10 transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-80" />

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-[0_0_30px_rgba(0,218,153,0.4)] group-hover:shadow-[0_0_50px_rgba(0,218,153,0.6)] transition-all duration-300 z-30"
                  >
                    <div className="w-0 h-0 border-t-[10px] md:border-t-[14px] border-t-transparent border-l-[16px] md:border-l-[24px] border-l-white border-b-[10px] md:border-b-[14px] border-b-transparent ml-2 md:ml-3" />

                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-full border border-primary/50 animate-ping opacity-50" />
                  </motion.div>

                  <p className="mt-8 text-white font-semibold tracking-widest uppercase text-xs md:text-sm z-30 drop-shadow-lg">Watch Video - How I Work</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
