import { motion } from 'framer-motion';
import { Building, Globe, TrendingUp, Layers, Brain, MessageCircle, TimerIcon } from 'lucide-react';

const marqueeItems = [
  { text: "Fast turnaround", icon: TrendingUp },
  { text: "Available worldwide", icon: Globe },
  { text: "Clear communication", icon: MessageCircle },
  { text: "Enterprise SaaS Specialist", icon: Layers },
  { text: "Healthcare & AI Domain Expertise", icon: Brain },
  { text: "Available for Freelance Projects", icon: TimerIcon },
  { text: "Trusted by startups", icon: Building },
];

const MarqueeStripe = () => {
  // Multiply items for a truly infinite feel
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-400 py-4 relative overflow-hidden shadow-md z-10 border-y border-white/20">

      <div className="relative flex whitespace-nowrap overflow-hidden group">
        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <div
                className="flex items-center space-x-2.5 transition-all duration-300 hover:scale-105 cursor-default group/item"
              >
                <item.icon size={16} className="text-white/80 group-hover/item:text-white transition-colors" />
                <span className="text-[12px] font-black tracking-widest text-white/90 group-hover/item:text-white uppercase drop-shadow-sm transition-colors">{item.text}</span>
              </div>

              {/* Dot Separator */}
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeStripe;
