'use client'
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  href: string;
  padding?: string;
  borderRadius?: string;
  className?: string;
}

const ButtonNotified: React.FC<ButtonProps> = ({ text, href, padding = 'px-4 py-2', borderRadius = 'rounded-2xl', className = '' }) => {
  return (
    <button
      className={`cursor-pointer shadow bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 hover:from-gray-300 hover:via-gray-200 hover:to-gray-400 transition-all duration-300 font-open-sans ${padding} ${borderRadius} ${className}`}
    >
      <Link href={href} className="transition-colors">
        {text}
      </Link>
    </button>
  );
};

export default ButtonNotified;
