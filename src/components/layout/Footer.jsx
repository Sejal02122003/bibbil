import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <span className="text-2xl font-bold mb-4 block">Bibbil</span>
                        <p className="text-gray-400 text-sm">
                            Live shopping & auctions for collectors worldwide.
                        </p>
                    </div>

                    {/* Sellers */}
                    <div>
                        <h3 className="font-semibold mb-4">Sellers</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link to="/signup" className="hover:text-white transition-colors">Start Selling</Link></li>
                            <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
                            <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link to="/guidelines" className="hover:text-white transition-colors">Guidelines</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link to="/community" className="hover:text-white transition-colors">Community</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link to="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                            <li><Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Bibbil. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
