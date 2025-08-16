'use client'
import React from 'react';
import { useLocale } from '@/hooks/useLocale';

interface ButtonProps {
  text: string;
  href: string;
  padding?: string;
  borderRadius?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, href, padding = 'px-4 py-2', borderRadius = 'rounded-2xl', className = '' }) => {
  const { navigateTo } = useLocale();

  const handleClick = () => {
    navigateTo(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer shadow bg-gradient-to-r from-[#6a0080] via-[#ca0ffd] to-[#6a0080] hover:from-[#b000e0] hover:to-[#4a004f] transition-all duration-300 font-open-sans ${padding} ${borderRadius} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
