import React from 'react';

const GlowDivider = () => {
  return (
    <div className="relative w-full h-px py-2 flex items-center justify-center overflow-visible">
      {/* The main horizontal line */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] opacity-30" style={{ background: 'linear-gradient(90deg, transparent, var(--primary-mint), transparent)' }} />
      
      {/* The glowing centerpiece */}
      <div className="relative z-10 w-60 h-[2px] bg-primary shadow-[0_0_12px_var(--primary-mint)] rounded-full" />
    </div>
  );
};

export default GlowDivider;
