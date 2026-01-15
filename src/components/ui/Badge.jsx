import React from 'react';

export const Badge = ({
    children,
    variant = 'default',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center font-medium rounded-full';

    const variants = {
        default: 'bg-slate-100 text-slate-700',
        primary: 'bg-yellow-100 text-yellow-800',
        success: 'bg-emerald-100 text-emerald-800',
        danger: 'bg-red-100 text-red-700',
        warning: 'bg-amber-100 text-amber-800',
        info: 'bg-sky-100 text-sky-800',
        live: 'bg-red-500 text-white animate-pulse',
        pending: 'bg-amber-100 text-amber-800',
        completed: 'bg-emerald-100 text-emerald-800',
    };

    const sizes = {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-1 text-sm',
        lg: 'px-3 py-1.5 text-base',
    };

    return (
        <span
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </span>
    );
};

export default Badge;
