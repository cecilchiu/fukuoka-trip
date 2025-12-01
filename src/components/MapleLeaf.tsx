import React from 'react';

interface MapleLeafProps {
  className?: string;
  color?: string;
}

export const MapleLeaf: React.FC<MapleLeafProps> = ({ className = "", color = "currentColor" }) => {
  return (
    <svg viewBox="0 0 24 24" fill={color} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M11.83,2.44C11.64,2.33,11.45,2.44,11.39,2.65L10.23,6.5L6.37,5.34C6.16,5.27,6,5.43,6.08,5.63l1.84,4.52L3.1,11.33c-0.2,0.06-0.2,0.34,0,0.4l4.81,1.44l-1.6,4.56c-0.07,0.2,0.12,0.39,0.32,0.32l4.64-1.55l1.09,4.96c0.04,0.21,0.34,0.21,0.38,0l1.09-4.96l4.64,1.55c0.2,0.07,0.39-0.12,0.32-0.32l-1.6-4.56l4.81-1.44c0.2-0.06,0.2-0.34,0-0.4l-4.82-1.18l1.84-4.52c0.08-0.2-0.08-0.36-0.29-0.29L14.77,6.5l-1.16-3.85C13.55,2.44,13.36,2.33,13.17,2.44L12.5,2.83L11.83,2.44z" />
    </svg>
  );
};