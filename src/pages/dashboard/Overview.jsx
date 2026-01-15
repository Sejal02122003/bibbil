import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, DollarSign, Package, Video, ArrowRight, Eye, ArrowUpRight } from 'lucide-react';
import DashboardNav from '../../components/layout/DashboardNav';
import { mockStats, mockOrders, mockLiveShows } from '../../data/mockData';
import { formatCurrency, formatDate, formatNumber } from '../../utils/helpers';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const salesData = [
    { name: 'Mon', sales: 450 },
    { name: 'Tue', sales: 680 },
    { name: 'Wed', sales: 520 },
    { name: 'Thu', sales: 890 },
    { name: 'Fri', sales: 750 },
    { name: 'Sat', sales: 920 },
    { name: 'Sun', sales: 1100 },
];

const Overview = () => {
    const stats = [
        {
            title: 'Total Sales',
            value: formatCurrency(mockStats.totalSales),
            change: '+12.5%',
            positive: true,
        },
        {
            title: 'Active Viewers',
            value: formatNumber(mockStats.activeViewers),
            change: '+8.2%',
            positive: true,
        },
        {
            title: 'Followers',
            value: formatNumber(mockStats.totalFollowers),
            change: '+15.3%',
            positive: true,
        },
        {
            title: 'Pending Orders',
            value: mockStats.pendingOrders,
            change: 'Needs action',
            positive: false,
        },
    ];

    return (
        <DashboardNav>
            <div className="space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Welcome back, John</h1>
                    <p className="text-gray-500 mt-1">Here's what's happening with your store today</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-2xl p-5 border border-gray-100">
                            <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            <p className={`text-sm mt-2 ${stat.positive ? 'text-green-600' : 'text-amber-600'}`}>
                                {stat.change}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Sales Chart */}
                    <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-semibold text-gray-900">Sales Overview</h2>
                            <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500">
                                <option>Last 7 days</option>
                                <option>Last 30 days</option>
                                <option>Last 90 days</option>
                            </select>
                        </div>
                        <ResponsiveContainer width="100%" height={280}>
                            <AreaChart data={salesData}>
                                <defs>
                                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#fbbf24" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                                <YAxis stroke="#9ca3af" fontSize={12} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#fff',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '12px',
                                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="sales"
                                    stroke="#f59e0b"
                                    strokeWidth={2}
                                    fill="url(#colorSales)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                        <div className="space-y-3">
                            <Link
                                to="/dashboard/live-stream"
                                className="flex items-center justify-between p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center">
                                        <Video size={20} className="text-gray-900" />
                                    </div>
                                    <span className="font-medium text-gray-900">Go Live</span>
                                </div>
                                <ArrowRight size={20} className="text-gray-400 group-hover:text-gray-600" />
                            </Link>

                            <Link
                                to="/dashboard/marketplace"
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center">
                                        <Package size={20} className="text-gray-700" />
                                    </div>
                                    <span className="font-medium text-gray-900">Add Product</span>
                                </div>
                                <ArrowRight size={20} className="text-gray-400 group-hover:text-gray-600" />
                            </Link>

                            <Link
                                to="/dashboard/orders"
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center">
                                        <DollarSign size={20} className="text-gray-700" />
                                    </div>
                                    <span className="font-medium text-gray-900">View Orders</span>
                                </div>
                                <span className="bg-amber-100 text-amber-700 text-sm font-medium px-2 py-1 rounded-lg">
                                    {mockStats.pendingOrders}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
                        <Link to="/dashboard/orders" className="text-sm text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1">
                            View All <ArrowUpRight size={16} />
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-sm text-gray-500 border-b border-gray-100">
                                    <th className="pb-3 font-medium">Order</th>
                                    <th className="pb-3 font-medium">Buyer</th>
                                    <th className="pb-3 font-medium">Product</th>
                                    <th className="pb-3 font-medium">Date</th>
                                    <th className="pb-3 font-medium">Amount</th>
                                    <th className="pb-3 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {mockOrders.map(order => (
                                    <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50">
                                        <td className="py-4 font-medium text-gray-900">{order.id}</td>
                                        <td className="py-4 text-gray-600">{order.buyer}</td>
                                        <td className="py-4 text-gray-600 max-w-xs truncate">{order.product}</td>
                                        <td className="py-4 text-gray-500">{formatDate(order.date)}</td>
                                        <td className="py-4 font-medium text-gray-900">{formatCurrency(order.amount)}</td>
                                        <td className="py-4">
                                            <span className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium
                        ${order.status === 'pending' ? 'bg-amber-100 text-amber-700' : ''}
                        ${order.status === 'shipped' ? 'bg-blue-100 text-blue-700' : ''}
                        ${order.status === 'delivered' ? 'bg-green-100 text-green-700' : ''}
                      `}>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardNav>
    );
};

export default Overview;
