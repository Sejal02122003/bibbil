import React, { forwardRef } from 'react';

/**
 * Input Component
 * 
 * A flexible input component with label, error states, helper text, and icon support.
 */

const Input = forwardRef(({
    type = 'text',
    label,
    error,
    helperText,
    icon: Icon,
    iconPosition = 'left',
    className = '',
    fullWidth = false,
    ...props
}, ref) => {
    const inputClasses = `
    w-full px-4 py-2.5 text-base
    border rounded-lg
    transition-all duration-200
    focus:outline-none focus:ring-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${error
            ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
            : 'border-neutral-300 focus:ring-primary-500 focus:border-primary-500'
        }
    ${Icon && iconPosition === 'left' ? 'pl-10' : ''}
    ${Icon && iconPosition === 'right' ? 'pr-10' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

    return (
        <div className={`${fullWidth ? 'w-full' : ''}`}>
            {label && (
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                    {label}
                </label>
            )}

            <div className="relative">
                {Icon && iconPosition === 'left' && (
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
                        <Icon size={20} />
                    </div>
                )}

                <input
                    ref={ref}
                    type={type}
                    className={inputClasses}
                    {...props}
                />

                {Icon && iconPosition === 'right' && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
                        <Icon size={20} />
                    </div>
                )}
            </div>

            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}

            {helperText && !error && (
                <p className="mt-1 text-sm text-neutral-500">{helperText}</p>
            )}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
