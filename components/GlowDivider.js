import React from 'react';

const GlowDivider = () => {
  return (
    <div className="w-full py-8 flex items-center justify-center">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </div>
  );
};

export default GlowDivider;
