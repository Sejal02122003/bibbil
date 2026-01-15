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
    Menu,
    X,
    Bell,
    LogOut
} from 'lucide-react';

const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
    { icon: Video, label: 'Live Stream', path: '/dashboard/live-stream' },
    { icon: Gavel, label: 'Auctions', path: '/dashboard/auctions' },
    { icon: ShoppingBag, label: 'Marketplace', path: '/dashboard/marketplace' },
    { icon: DollarSign, label: 'Payments', path: '/dashboard/payments' },
    { icon: Package, label: 'Orders', path: '/dashboard/orders' },
    { icon: BarChart3, label: 'Analytics', path: '/dashboard/analytics' },
    { icon: Users, label: 'Community', path: '/dashboard/community' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
];

export const DashboardNav = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Bar */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
                <div className="flex items-center justify-between px-4 lg:px-8 h-16">
                    {/* Left: Menu + Logo */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                        >
                            <Menu size={20} />
                        </button>
                        <Link to="/dashboard" className="flex items-center">
                            <span className="text-xl font-bold text-gray-900">Bibbil</span>
                        </Link>
                    </div>

                    {/* Right: Notifications + Profile */}
                    <div className="flex items-center gap-3">
                        <button className="p-2 rounded-lg hover:bg-gray-100 relative">
                            <Bell size={20} className="text-gray-600" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-amber-500 rounded-full"></span>
                        </button>
                        <div className="w-9 h-9 bg-amber-400 rounded-full flex items-center justify-center text-gray-900 font-semibold">
                            JD
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <aside className={`
          fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] bg-white border-r border-gray-100
          w-64 transform transition-transform duration-200 z-30
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
                    <nav className="p-4 space-y-1">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const active = isActive(item.path);

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl transition-colors
                    ${active
                                            ? 'bg-amber-50 text-amber-700'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }
                  `}
                                >
                                    <Icon size={20} />
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Logout */}
                    <div className="absolute bottom-4 left-4 right-4">
                        <Link
                            to="/"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors"
                        >
                            <LogOut size={20} />
                            <span className="font-medium">Sign Out</span>
                        </Link>
                    </div>
                </aside>

                {/* Overlay for mobile */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/20 z-20 lg:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}

                {/* Main Content */}
                <main className="flex-1 p-4 lg:p-8 max-w-7xl">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardNav;
