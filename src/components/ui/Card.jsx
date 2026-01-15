import React from 'react';
import { motion } from 'framer-motion';

/**
 * Card Component
 * 
 * A flexible card container with optional header, body, and footer sections.
 * Supports hover effects and custom styling.
 */

const Card = ({
    children,
    header,
    footer,
    className = '',
    hoverable = false,
    onClick,
    ...props
}) => {
    const baseStyles = 'card';
    const hoverStyles = hoverable ? 'cursor-pointer hover-lift' : '';

    const cardClasses = `${baseStyles} ${hoverStyles} ${className}`.trim();

    return (
        <motion.div
            className={cardClasses}
            onClick={onClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            {...props}
        >
            {header && (
                <div className="px-6 py-4 border-b border-neutral-200">
                    {header}
                </div>
            )}

            <div className="px-6 py-4">
                {children}
            </div>

            {footer && (
                <div className="px-6 py-4 border-t border-neutral-200 bg-neutral-50 rounded-b-lg">
                    {footer}
                </div>
            )}
        </motion.div>
    );
};

export default Card;
