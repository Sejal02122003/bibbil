import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Video,
    Gavel,
    ShoppingBag,
    DollarSign,
    Package,
    BarChart3,
    Users,
    Settings,
    ChevronLeft,
    ChevronRight,
    Bell,
    User,
    LogOut,
    Menu,
    X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * DashboardNav Component
 * 
 * Seller dashboard navigation with collapsible sidebar.
 */

const DashboardNav = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
        { icon: Video, label: 'Live Stream', path: '/dashboard/livestream' },
        { icon: Gavel, label: 'Auctions', path: '/dashboard/auctions' },
        { icon: ShoppingBag, label: 'Marketplace', path: '/dashboard/marketplace' },
        { icon: DollarSign, label: 'Payments', path: '/dashboard/payments' },
        { icon: Package, label: 'Orders', path: '/dashboard/orders' },
        { icon: BarChart3, label: 'Analytics', path: '/dashboard/analytics' },
        { icon: Users, label: 'Community', path: '/dashboard/community' },
        { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
    ];

    const isActive = (path) => location.pathname === path;

    const SidebarContent = () => (
        <>
            {/* Logo */}
            <div className="p-6 border-b border-neutral-200">
                <Link to="/" className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">⚡</span>
                    </div>
                    {sidebarOpen && (
                        <div>
                            <span className="text-xl font-bold text-neutral-900">Bibbil</span>
                            <p className="text-xs text-neutral-500">Seller Hub</p>
                        </div>
                    )}
                </Link>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 p-4 space-y-1">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`
              flex items-center space-x-3 px-4 py-3 rounded-lg
              transition-all duration-200
              ${isActive(item.path)
                                ? 'bg-primary-50 text-primary-600 font-medium'
                                : 'text-neutral-700 hover:bg-neutral-100'
                            }
            `}
                    >
                        <item.icon size={20} />
                        {sidebarOpen && <span>{item.label}</span>}
                    </Link>
                ))}
            </nav>

            {/* User Profile */}
            <div className="p-4 border-t border-neutral-200">
                <div className="flex items-center space-x-3 px-4 py-3">
                    <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center">
                        <User size={20} className="text-white" />
                    </div>
                    {sidebarOpen && (
                        <div className="flex-1">
                            <p className="font-medium text-neutral-900">John Seller</p>
                            <p className="text-xs text-neutral-500">john@example.com</p>
                        </div>
                    )}
                </div>
                {sidebarOpen && (
                    <button className="flex items-center space-x-2 px-4 py-2 mt-2 w-full text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <LogOut size={18} />
                        <span>Logout</span>
                    </button>
                )}
            </div>
        </>
    );

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Desktop Sidebar */}
            <aside
                className={`
          hidden lg:flex flex-col fixed left-0 top-0 h-full
          bg-white border-r border-neutral-200 transition-all duration-300
          ${sidebarOpen ? 'w-64' : 'w-20'}
        `}
            >
                <SidebarContent />

                {/* Toggle Button */}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="absolute -right-3 top-6 w-6 h-6 bg-white border border-neutral-200 rounded-full flex items-center justify-center hover:bg-neutral-50"
                >
                    {sidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                </button>
            </aside>

            {/* Mobile Menu */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200 px-4 py-3">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">⚡</span>
                        </div>
                        <span className="text-xl font-bold text-neutral-900">Bibbil</span>
                    </Link>

                    <div className="flex items-center space-x-4">
                        <button className="text-neutral-700 hover:text-neutral-900">
                            <Bell size={24} />
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-neutral-700 hover:text-neutral-900"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                        />
                        <motion.aside
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'tween' }}
                            className="lg:hidden fixed left-0 top-0 h-full w-64 bg-white z-50 flex flex-col"
                        >
                            <SidebarContent />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main
                className={`
          transition-all duration-300
          lg:ml-${sidebarOpen ? '64' : '20'}
          pt-16 lg:pt-0
        `}
                style={{
                    marginLeft: window.innerWidth >= 1024 ? (sidebarOpen ? '256px' : '80px') : '0'
                }}
            >
                {/* Top Bar */}
                <div className="hidden lg:flex items-center justify-between px-8 py-4 bg-white border-b border-neutral-200">
                    <h1 className="text-2xl font-bold text-neutral-900">
                        {navItems.find(item => isActive(item.path))?.label || 'Dashboard'}
                    </h1>

                    <div className="flex items-center space-x-4">
                        <button className="relative text-neutral-700 hover:text-neutral-900">
                            <Bell size={24} />
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                3
                            </span>
                        </button>
                    </div>
                </div>

                {/* Page Content */}
                <div className="p-4 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardNav;
