import { motion } from 'framer-motion'

/**
 * RotatingBadge – A circular badge with text rotating around the perimeter
 * and a centered icon. Inspired by mockup-style rotating seal badges.
 *
 * @param {Object}   props
 * @param {React.ElementType} props.icon        – Lucide icon component for the center
 * @param {string[]} props.labels               – Array of labels to display around the circle
 * @param {string}   [props.iconColor="#00DA99"] – Color of the center icon
 * @param {string}   [props.textColor="#0D63CC"] – Color of the rotating text
 * @param {number}   [props.size=160]            – Diameter in pixels
 */
export default function RotatingBadge({
   icon: Icon,
   labels = [],
   iconColor = "#00DA99",
   textColor = "#0D63CC",
   size = 160,
}) {
   // Build the circular text string with dot separators
   const circularText = labels.map(l => l.toUpperCase()).join('  •  ') + '  •  '

   const radius = size / 2
   const textRadius = radius - 18 // Offset inward

   return (
      <motion.div
         initial={{ opacity: 0, scale: 0.8 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
         className="pointer-events-none hidden lg:flex items-center justify-center"
         style={{ width: size, height: size }}
      >
         {/* Outer container with premium clean look */}
         <div
            className="relative rounded-full flex items-center justify-center"
            style={{
               width: size,
               height: size,
               background: '#FFFFFF',
               boxShadow: `
                  0 20px 40px rgba(13, 99, 204, 0.08),
                  0 4px 12px rgba(0, 0, 0, 0.02),
                  inset 0 0 0 1px rgba(13, 99, 204, 0.05)
               `,
            }}
         >
            {/* Rotating text ring */}
            <div
               className="absolute inset-0"
               style={{ animation: 'spin-slow 20s linear infinite' }}
            >
               <svg
                  width={size}
                  height={size}
                  viewBox={`0 0 ${size} ${size}`}
               >
                  <defs>
                     <path
                        id="rotating-badge-text-path"
                        d={`M ${radius}, ${radius} m -${textRadius}, 0 a ${textRadius},${textRadius} 0 1,1 ${textRadius * 2},0 a ${textRadius},${textRadius} 0 1,1 -${textRadius * 2},0`}
                        fill="none"
                     />
                  </defs>
                  <text
                     fill={textColor}
                     fontSize="13"
                     fontWeight="900"
                     letterSpacing="2.5"
                     fontFamily="'Inter', sans-serif"
                  >
                     <textPath
                        href="#rotating-badge-text-path"
                        startOffset="50%"
                        textAnchor="middle"
                        textLength={Math.floor(2 * Math.PI * textRadius) - 15}
                     >
                        {circularText}
                     </textPath>
                  </text>
               </svg>
            </div>

            {/* Inner raised circle */}
            <div
               className="absolute rounded-full"
               style={{
                  width: size * 0.55,
                  height: size * 0.55,
                  background: '#FFFFFF',
                  boxShadow: '0 8px 24px rgba(13, 99, 204, 0.08), 0 2px 8px rgba(0, 0, 0, 0.03), inset 0 0 0 1px rgba(13, 99, 204, 0.03)'
               }}
            />

            {/* Center icon */}
            <div
               className="relative z-10 rounded-full flex items-center justify-center"
               style={{
                  width: size * 0.4,
                  height: size * 0.4,
                  background: `linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.2))`,
               }}
            >
               {Icon && (
                  <Icon
                     size={size * 0.22}
                     strokeWidth={3}
                     style={{ color: iconColor }}
                  />
               )}
            </div>
         </div>
      </motion.div>
   )
}
