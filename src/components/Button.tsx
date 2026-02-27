import { motion } from 'motion/react';
import { cn } from '../utils/cn';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const variants = {
    primary: 'bg-ink text-cream hover:bg-gold hover:text-ink',
    secondary: 'bg-gold text-ink hover:bg-ink hover:text-cream',
    outline: 'bg-transparent border border-ink text-ink hover:bg-ink hover:text-cream',
    ghost: 'bg-transparent text-ink hover:bg-ink/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </motion.button>
  );
}
