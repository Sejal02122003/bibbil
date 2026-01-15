import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Navbar Component
 * 
 * Public navigation bar for landing pages with responsive mobile menu.
 */

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Features', href: '#features' },
        { label: 'Categories', href: '#categories' },
        { label: 'Success Stories', href: '#success-stories' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
            <div className="container-custom">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">⚡</span>
                        </div>
                        <span className="text-2xl font-bold text-neutral-900">Bibbil</span>
                        <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                            Sellers
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-neutral-700 hover:text-primary-600 font-medium transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/signin">
                            <Button variant="ghost">Sign In</Button>
                        </Link>
                        <Link to="/signup">
                            <Button variant="primary">Start Selling</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-neutral-700 hover:text-neutral-900"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-neutral-200 bg-white"
                    >
                        <div className="container-custom py-4 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="block text-neutral-700 hover:text-primary-600 font-medium py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="pt-4 space-y-2">
                                <Link to="/signin" className="block">
                                    <Button variant="ghost" fullWidth>Sign In</Button>
                                </Link>
                                <Link to="/signup" className="block">
                                    <Button variant="primary" fullWidth>Start Selling</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
