import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo - Clean text only */}
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl font-bold text-gray-900">Bibbil</span>
                        <span className="ml-1.5 text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">Seller</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            Features
                        </Link>
                        <Link to="/pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            Pricing
                        </Link>
                        <Link to="/help" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            Help
                        </Link>
                        <Link to="/signin" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            Sign In
                        </Link>
                        <Link to="/signup">
                            <Button variant="primary" size="sm">
                                Start Selling
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100">
                        <div className="flex flex-col gap-2">
                            <Link to="/features" className="text-gray-600 hover:text-gray-900 font-medium py-3 px-2 rounded-lg hover:bg-gray-50">
                                Features
                            </Link>
                            <Link to="/pricing" className="text-gray-600 hover:text-gray-900 font-medium py-3 px-2 rounded-lg hover:bg-gray-50">
                                Pricing
                            </Link>
                            <Link to="/help" className="text-gray-600 hover:text-gray-900 font-medium py-3 px-2 rounded-lg hover:bg-gray-50">
                                Help
                            </Link>
                            <Link to="/signin" className="text-gray-600 hover:text-gray-900 font-medium py-3 px-2 rounded-lg hover:bg-gray-50">
                                Sign In
                            </Link>
                            <Link to="/signup" className="mt-2">
                                <Button variant="primary" size="md" className="w-full">
                                    Start Selling
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
