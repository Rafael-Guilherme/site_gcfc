import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  href: string;
  padding?: string;
  borderRadius?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, href, padding = 'px-4 py-2', borderRadius = 'rounded-2xl', className = '' }) => {
  return (
    <button
      className={`cursor-pointer shadow bg-gradient-to-r from-[#6a0080] via-[#ca0ffd] to-[#6a0080] hover:from-[#b000e0] hover:to-[#4a004f] transition-all duration-300 font-open-sans ${padding} ${borderRadius} ${className}`}
    >
      <Link href={href} className="transition-colors">
        {text}
      </Link>
    </button>
  );
};

export default Button;
