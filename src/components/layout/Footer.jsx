import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

/**
 * Footer Component
 * 
 * Site footer with links, social media, and newsletter signup.
 */

const Footer = () => {
    const footerSections = [
        {
            title: 'Sell',
            links: [
                { label: 'Start Selling', href: '/signup' },
                { label: 'Seller Guidelines', href: '/guidelines' },
                { label: 'Fees & Pricing', href: '/pricing' },
                { label: 'Success Stories', href: '/stories' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { label: 'Help Center', href: '/help' },
                { label: 'Seller Hub', href: '/dashboard' },
                { label: 'Community', href: '/community' },
                { label: 'Blog', href: '/blog' },
            ],
        },
        {
            title: 'Company',
            links: [
                { label: 'About Us', href: '/about' },
                { label: 'Careers', href: '/careers' },
                { label: 'Press', href: '/press' },
                { label: 'Contact', href: '/contact' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Cookie Policy', href: '/cookies' },
                { label: 'Buyer Protection', href: '/buyer-protection' },
            ],
        },
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Youtube, href: '#', label: 'YouTube' },
    ];

    return (
        <footer className="bg-secondary-900 text-white">
            <div className="container-custom py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">⚡</span>
                            </div>
                            <span className="text-2xl font-bold">Bibbil</span>
                        </div>
                        <p className="text-neutral-300 mb-4">
                            Live shopping & auctions for collectors and curators worldwide.
                        </p>

                        {/* Newsletter */}
                        <div className="mt-6">
                            <h4 className="font-semibold mb-2">Stay Updated</h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 rounded-l-lg bg-secondary-800 border border-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                                <button className="px-4 py-2 bg-gradient-primary rounded-r-lg hover:shadow-primary transition-all">
                                    <Mail size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h4 className="font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.href}
                                            className="text-neutral-300 hover:text-primary-400 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-secondary-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <p className="text-neutral-400 text-sm">
                            © 2026 Bibbil. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
