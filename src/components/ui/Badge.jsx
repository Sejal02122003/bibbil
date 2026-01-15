import React from 'react';

/**
 * Badge Component
 * 
 * Status indicator badges with different color variants.
 */

const Badge = ({
    children,
    variant = 'default',
    size = 'md',
    className = '',
    ...props
}) => {
    const variants = {
        default: 'bg-neutral-100 text-neutral-800',
        primary: 'bg-primary-100 text-primary-800',
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
        error: 'bg-red-100 text-red-800',
        info: 'bg-blue-100 text-blue-800',
        live: 'bg-red-500 text-white animate-pulse',
        hot: 'bg-orange-500 text-white',
    };

    const sizes = {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-1 text-sm',
        lg: 'px-3 py-1.5 text-base',
    };

    const badgeClasses = `
    inline-flex items-center justify-center
    font-medium rounded-full
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

    return (
        <span className={badgeClasses} {...props}>
            {children}
        </span>
    );
};

export default Badge;
