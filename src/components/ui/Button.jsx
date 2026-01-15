import React from 'react';
import { motion } from 'framer-motion';

/**
 * Button Component
 * 
 * A versatile button component with multiple variants, sizes, and states.
 * Supports icons, loading states, and smooth animations.
 */

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    icon: Icon,
    iconPosition = 'left',
    loading = false,
    disabled = false,
    fullWidth = false,
    className = '',
    onClick,
    type = 'button',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all focus-ring disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-gradient-primary text-white hover:shadow-primary hover:scale-105',
        secondary: 'bg-gradient-secondary text-white hover:shadow-secondary hover:scale-105',
        outline: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50',
        ghost: 'text-neutral-700 hover:bg-neutral-100',
        danger: 'bg-red-500 text-white hover:bg-red-600',
        success: 'bg-green-500 text-white hover:bg-green-600',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2.5 text-base',
        lg: 'px-6 py-3.5 text-lg',
        xl: 'px-8 py-4 text-xl',
    };

    const iconSizes = {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 28,
    };

    const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

    return (
        <motion.button
            type={type}
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled || loading}
            whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
            whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
            {...props}
        >
            {loading ? (
                <>
                    <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                    Loading...
                </>
            ) : (
                <>
                    {Icon && iconPosition === 'left' && (
                        <Icon size={iconSizes[size]} className="mr-2" />
                    )}
                    {children}
                    {Icon && iconPosition === 'right' && (
                        <Icon size={iconSizes[size]} className="ml-2" />
                    )}
                </>
            )}
        </motion.button>
    );
};

export default Button;
