import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

/**
 * Modal Component
 * 
 * Overlay modal with animations and customizable content.
 */

const Modal = ({
    isOpen,
    onClose,
    title,
    children,
    footer,
    size = 'md',
    className = '',
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const sizes = {
        sm: 'max-w-md',
        md: 'max-w-2xl',
        lg: 'max-w-4xl',
        xl: 'max-w-6xl',
        full: 'max-w-full mx-4',
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black bg-opacity-50 z-[1040]"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-[1050] overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ duration: 0.2 }}
                                className={`
                  relative w-full ${sizes[size]}
                  bg-white rounded-xl shadow-xl
                  ${className}
                `}
                            >
                                {/* Header */}
                                {title && (
                                    <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
                                        <h3 className="text-xl font-semibold text-neutral-900">
                                            {title}
                                        </h3>
                                        <button
                                            onClick={onClose}
                                            className="text-neutral-400 hover:text-neutral-600 transition-colors"
                                        >
                                            <X size={24} />
                                        </button>
                                    </div>
                                )}

                                {/* Body */}
                                <div className="px-6 py-4">
                                    {children}
                                </div>

                                {/* Footer */}
                                {footer && (
                                    <div className="px-6 py-4 border-t border-neutral-200 bg-neutral-50 rounded-b-xl">
                                        {footer}
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Modal;
