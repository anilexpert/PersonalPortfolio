import { motion } from 'framer-motion'
import { Sparkles, Globe, Shield, Zap, Layers, Cpu } from 'lucide-react'

const marqueeItems = [
  { text: "Seamless Integrations", icon: Globe },
  { text: "Enterprise Security", icon: Shield },
  { text: "High Performance", icon: Zap },
  { text: "Dynamic Scalability", icon: Layers },
  { text: "AI-Powered Insights", icon: Cpu },
  { text: "User-Centric Design", icon: Sparkles },
  { text: "99.9% Uptime", icon: Shield },
  { text: "Cloud Native", icon: Globe },
]

const MarqueeStripe = () => {
  // Duplicating items for seamless loop
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
  )
}

export default MarqueeStripe
