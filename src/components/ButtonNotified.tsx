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

const ButtonNotified: React.FC<ButtonProps> = ({ text, href, padding = 'px-4 py-2', borderRadius = 'rounded-2xl', className = '' }) => {
  const { navigateTo } = useLocale();

  const handleClick = () => {
    navigateTo(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer shadow bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 hover:from-gray-300 hover:via-gray-200 hover:to-gray-400 transition-all duration-300 font-open-sans ${padding} ${borderRadius} ${className}`}
    >
      {text}
    </button>
  );
};

export default ButtonNotified;
