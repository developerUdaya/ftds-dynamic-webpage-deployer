import React from 'react';

type ButtonVariant = 
  | 'primary' 
  | 'outline' 
  | 'light' 
  | 'outline-light';

type ButtonSize = 
  | 'small' 
  | 'medium' 
  | 'large';

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-blue-700 hover:bg-blue-800 text-white focus:ring-blue-500',
    outline: 'border border-gray-300 hover:bg-gray-50 text-gray-700 focus:ring-blue-500',
    light: 'bg-white hover:bg-gray-100 text-gray-900 focus:ring-blue-500',
    'outline-light': 'border border-white/30 text-white hover:bg-white/10 focus:ring-white',
  };
  
  const sizeClasses = {
    small: 'text-sm px-3 py-1.5',
    medium: 'text-sm px-4 py-2',
    large: 'text-base px-6 py-3',
  };
  
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer';
  
  const widthClasses = fullWidth ? 'w-full' : '';
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClasses} ${disabledClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;