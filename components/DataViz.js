import { motion } from 'framer-motion';

const DataViz = () => {
  return (
    <div className="relative w-full h-full p-6 glass rounded-[32px] overflow-hidden group">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-text-secondary opacity-60 mb-1">Impact Analysis</h4>
          <p className="text-lg font-bold text-depth">Product Efficiency</p>
        </div>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>

      <div className="relative h-40">
        <svg viewBox="0 0 400 160" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00DA99" />
              <stop offset="50%" stopColor="#0D63CC" />
              <stop offset="100%" stopColor="#282360" />
            </linearGradient>
            <linearGradient id="fillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0D63CC" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0D63CC" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid Lines */}
          {[0, 40, 80, 120, 160].map((y) => (
            <line 
              key={y} 
              x1="0" y1={y} x2="400" y2={y} 
              stroke="rgba(40, 35, 96, 0.05)" 
              strokeWidth="1" 
            />
          ))}

          {/* Data Line */}
          <motion.path
            d="M 0 120 Q 50 110 80 130 Q 120 150 160 100 Q 200 50 240 80 Q 280 110 320 60 Q 360 10 400 40"
            fill="none"
            className="graph-line"
            stroke="url(#gradientLine)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Fill Area */}
          <motion.path
            d="M 0 120 Q 50 110 80 130 Q 120 150 160 100 Q 200 50 240 80 Q 280 110 320 60 Q 360 10 400 40 V 160 H 0 Z"
            fill="url(#fillGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />

          {/* Data Points */}
          <motion.circle 
            cx="240" cy="80" r="6" 
            fill="#0D63CC" 
            className="glow-blue"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.2, type: 'spring' }}
          />
          <motion.circle 
            cx="320" cy="60" r="6" 
            fill="#00DA99" 
            className="glow-green"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.4, type: 'spring' }}
          />
        </svg>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="p-4 glass-blue rounded-2xl">
          <div className="text-[10px] font-bold text-primary uppercase mb-1">Growth</div>
          <div className="text-xl font-bold text-depth">+34%</div>
        </div>
        <div className="p-4 glass-green rounded-2xl">
          <div className="text-[10px] font-bold text-accent uppercase mb-1">Impact</div>
          <div className="text-xl font-bold text-depth">High</div>
        </div>
      </div>
    </div>
  );
};

export default DataViz;
